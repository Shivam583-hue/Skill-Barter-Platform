var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Server } from "socket.io";
import { prisma } from "./clientInstance.js";
import { saveMessageToDatabase } from "./utils/saveMessageToDatabase.js";
import Joi from "joi";
const messageSchema = Joi.object({
    messageContent: Joi.string().required(),
    groupId: Joi.number().integer().required(),
    messageCreatorId: Joi.number().integer().required(),
});
const setupSocketIO = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "https://opportunehub-lac.vercel.app",
            methods: ["GET", "POST"],
            credentials: true,
        },
    });
    io.on("connection", (socket) => {
        socket.on("sendMessage", (data) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { error, value } = messageSchema.validate(data);
                if (error) {
                    socket.emit("messageError", error.details);
                    return;
                }
                const isAuthorized = yield verifyUser(value.messageCreatorId, value.groupId);
                if (!isAuthorized) {
                    socket.emit("messageError", "Not authorized to send messages to this group");
                    return;
                }
                let message = yield saveMessageToDatabase(value);
                if (!message.creator) {
                    const creator = yield getUserById(message.messageCreatorId);
                    if (creator) {
                        message = Object.assign(Object.assign({}, message), { creator });
                    }
                    else {
                        socket.emit("messageError", "Creator not found");
                        return;
                    }
                }
                io.to(value.groupId.toString()).emit("newMessage", message);
            }
            catch (error) {
                console.error("Error handling sendMessage event:", error);
                socket.emit("messageError", "Failed to send message");
            }
        }));
        socket.on("joinGroup", (groupId) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const room = groupId.toString();
                yield socket.join(room);
                console.log(`User ${socket.id} joined group ${groupId}`);
            }
            catch (error) {
                console.error(`Error joining group ${groupId}:`, error);
            }
        }));
        socket.on("leaveGroup", (groupId) => __awaiter(void 0, void 0, void 0, function* () {
            const room = groupId.toString();
            socket.leave(room);
            console.log(`User ${socket.id} left group ${groupId}`);
        }));
        socket.on("disconnect", () => {
            console.log("A user disconnected:", socket.id);
            socket.rooms.forEach((room) => socket.leave(room));
        });
    });
    return io;
};
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                fullName: true,
                profilePic: true,
            },
        });
        return user;
    }
    catch (error) {
        console.error("Error fetching user by ID:", error);
        return null;
    }
});
const verifyUser = (userId, groupId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const group = yield prisma.group.findUnique({
            where: { groupId },
            include: { members: { where: { id: userId } } },
        });
        return !!group && group.members.length > 0;
    }
    catch (error) {
        console.error("Error verifying user group membership:", error);
        return false;
    }
});
export default setupSocketIO;
