import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { prisma } from "./clientInstance.js";
import { saveMessageToDatabase } from "./utils/saveMessageToDatabase.js";
import  Joi from "joi";

type User = {
  id: number;
  fullName: string;
  profilePic: string;
};

type SendMessageData = {
  messageContent: string;
  groupId: number;
  creator: User;
  messageCreatorId: number;
};

const messageSchema = Joi.object<SendMessageData>({
  messageContent: Joi.string().required(),
  groupId: Joi.number().integer().required(),
  messageCreatorId: Joi.number().integer().required(),
});

const setupSocketIO = (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("sendMessage", async (data: SendMessageData) => {
      try {
        const { error, value } = messageSchema.validate(data);
        if (error) {
          console.error("Invalid message data:", error.details);
          return;
        }

        const isAuthorized = await verifyUser(
          value.messageCreatorId,
          value.groupId,
        );
        if (!isAuthorized) {
          console.error("User not authorized to send to this group.");
          return;
        }

        console.log("Message received:", value);
        let message = await saveMessageToDatabase(value);

        if (!message.creator) {
          const creator = await getUserById(message.messageCreatorId);
          if (creator) {
            message = { ...message, creator };
          } else {
            console.error("Creator not found.");
            return;
          }
        }

        io.to(value.groupId.toString()).emit("newMessage", message);
      } catch (error) {
        console.error("Error handling sendMessage event:", error);
      }
    });

    socket.on("joinGroup", async (groupId: number) => {
      socket.join(groupId.toString());
      console.log(`User ${socket.id} joined group ${groupId}`);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
      socket.rooms.forEach((room) => socket.leave(room));
    });
  });

  return io;
};

const getUserById = async (userId: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        fullName: true,
        profilePic: true,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
};

const verifyUser = async (
  userId: number,
  groupId: number,
): Promise<boolean> => {
  try {
    const group = await prisma.group.findUnique({
      where: { groupId },
      include: { members: { where: { id: userId } } },
    });

    return !!group && group.members.length > 0;
  } catch (error) {
    console.error("Error verifying user group membership:", error);
    return false;
  }
};

export default setupSocketIO;
