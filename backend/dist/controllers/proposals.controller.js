var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Status } from "@prisma/client";
import { prisma } from "../clientInstance.js";
export const sendProposal = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { groupId, senderId, receiverId, content } = req.body;
    if (!senderId || !groupId || !receiverId || !content) {
        return res.status(202).json({ success: false, msg: "Invalid request" });
    }
    const parsedGroupId = Number(groupId);
    const parsedreceiverId = Number(receiverId);
    try {
        const response = yield prisma.proposal.create({
            data: {
                senderId,
                groupId: parsedGroupId,
                receiverId: parsedreceiverId,
                content,
                status: Status.PENDING,
            },
        });
        res.status(200).json({ success: true, data: response });
    }
    catch (error) {
        console.log("Error Occured Dekh Le apna", error);
    }
}));
export const getAuthenticatedUsersProposals = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { receiverId } = req.query;
    const parsedReceiverId = Number(receiverId);
    if (isNaN(parsedReceiverId)) {
        return res.json({
            success: false,
            message: "Invalid receiver ID.",
        });
    }
    try {
        const response = yield prisma.proposal.findMany({
            where: {
                receiverId: parsedReceiverId,
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        fullName: true,
                        profilePic: true,
                    },
                },
                receiver: {
                    select: {
                        id: true,
                        fullName: true,
                        profilePic: true,
                    },
                },
            },
        });
        res.json({
            success: true,
            data: response,
        });
    }
    catch (error) {
        console.log("Error occurred:", error);
        res.json({
            success: false,
            message: "An error occurred while fetching proposals.",
        });
    }
}));
export const acceptProposal = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO : add the chat functionality later
    const { id, senderId, receiverId, content, groupId } = req.body;
    if (!id || !senderId || !receiverId || !content || !groupId) {
        return res.status(202).json({ success: false, msg: "Invalid request" });
    }
    try {
        const response = yield prisma.proposal.update({
            where: {
                id,
            },
            data: {
                status: "ACCEPTED",
            },
        });
        res.status(200).json({ success: true, data: response });
    }
    catch (error) {
        console.log("Error hogya", error);
    }
}));
export const rejectProposal = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, senderId, receiverId, content } = req.body;
    if (!id || !senderId || !receiverId || !content) {
        return res.status(202).json({ success: false, msg: "Invalid request" });
    }
    try {
        const response = yield prisma.proposal.update({
            where: {
                id,
            },
            data: {
                status: "DENIED",
            },
        });
        res.status(200).json({ success: true, data: response });
    }
    catch (error) {
        console.log("Error hogya", error);
    }
}));
