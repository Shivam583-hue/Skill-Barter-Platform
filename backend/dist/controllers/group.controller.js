var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { prisma } from "../clientInstance.js";
export const getSpecificGroupDetails = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const groupId = Number(req.params.groupId);
    try {
        const groupDetails = yield prisma.group.findUnique({
            where: {
                groupId,
            },
        });
        if (!groupDetails) {
            return res.status(404).json({
                success: false,
                error: "Group not found",
            });
        }
        res.status(200).json({ success: true, data: groupDetails });
    }
    catch (error) {
        console.error("Error fetching Group Details: ", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}));
export const getMembersInAGroup = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const groupId = Number(req.params.groupId);
    try {
        const group = yield prisma.group.findUnique({
            where: { groupId },
            include: {
                members: {
                    select: {
                        id: true,
                        fullName: true,
                        username: true,
                        profilePic: true,
                    },
                },
            },
        });
        if (!group) {
            return res.status(404).json({
                success: false,
                error: "Group Members not found",
            });
        }
        res.status(200).json({ success: true, data: group.members });
    }
    catch (error) {
        console.error("Error fetching Group Members: ", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}));
export const getMessagesInAGroup = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const groupId = Number(req.params.groupId);
    const limit = parseInt(req.query.limit) || 20;
    const offset = parseInt(req.query.offset) || 0;
    try {
        const groupExists = yield prisma.group.findUnique({
            where: { groupId },
        });
        if (!groupExists) {
            return res.status(404).json({
                success: false,
                error: "Group not found",
            });
        }
        const messages = yield prisma.message.findMany({
            where: { groupId },
            skip: offset,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
            include: { creator: true },
        });
        const totalMessages = yield prisma.message.count({
            where: { groupId },
        });
        res.json({
            success: true,
            data: messages,
            meta: {
                total: totalMessages,
                limit,
                offset,
            },
        });
    }
    catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({
            success: false,
            error: "Failed to fetch messages",
        });
    }
}));
export const groupJoinedbyAuthenticatedUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    try {
        const userWithGroups = yield prisma.user.findUnique({
            where: { id: userId },
            include: { memberOfGroups: true },
        });
        if (!userWithGroups) {
            return res.status(404).json({
                success: false,
                error: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            data: userWithGroups.memberOfGroups,
        });
    }
    catch (error) {
        console.error("Error fetching user groups: ", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}));
export const groupsCreatedByAuthenticatedUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    try {
        const userWithCreatedGroups = yield prisma.user.findUnique({
            where: { id: userId },
            include: { createdGroups: true },
        });
        if (!userWithCreatedGroups) {
            return res.status(404).json({
                success: false,
                error: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            data: userWithCreatedGroups.createdGroups,
        });
    }
    catch (error) {
        console.error("Error fetching user-created groups: ", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}));
export const createGroup = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { groupName, userId } = req.body;
    try {
        const group = yield prisma.group.create({
            data: {
                groupName,
                creatorId: userId,
                members: {
                    connect: { id: userId },
                },
            },
        });
        res.status(201).json({ success: true, data: group });
    }
    catch (error) {
        console.log("Failed to create group chat", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const addMembers = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, groupId } = req.body;
    if (!userId || !groupId) {
        return res.status(400).json({
            success: false,
            error: "User ID and Group ID are required",
        });
    }
    try {
        const response = yield prisma.group.update({
            where: { groupId },
            data: {
                members: { connect: { id: userId } },
            },
        });
        res.status(201).json({ success: true, data: response });
    }
    catch (error) {
        console.error("Error adding members: ", error);
        res.status(500).json({
            success: false,
            error: "Failed to add members to the group",
        });
    }
}));
export const removeMembers = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, groupId } = req.body;
    if (!userId || !groupId) {
        return res.status(400).json({
            success: false,
            error: "User ID and Group ID are required",
        });
    }
    try {
        const group = yield prisma.group.findUnique({
            where: { groupId },
            include: { members: { where: { id: userId } } }
        });
        if (!group || group.members.length === 0) {
            return res.status(404).json({
                success: false,
                error: "User not found in this group",
            });
        }
        yield prisma.group.update({
            where: { groupId },
            data: {
                members: {
                    disconnect: [{ id: userId }]
                }
            },
        });
        res.status(200).json({
            success: true,
            message: "Member removed successfully.",
        });
    }
    catch (error) {
        console.error("Error removing members: ", error);
        res.status(500).json({
            success: false,
            error: "Failed to remove members from the group",
        });
    }
}));
export const deleteGroup = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.userId);
    const { groupId } = req.body;
    if (isNaN(userId) || isNaN(groupId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user or group Id .",
        });
    }
    try {
        const group = yield prisma.group.findFirst({
            where: { groupId, creatorId: userId },
        });
        if (!group) {
            return res
                .status(404)
                .json({ success: false, message: "Design Opportunity not found." });
        }
        yield prisma.group.delete({
            where: { groupId },
        });
        res.status(200).json({
            success: true,
            message: "Group deleted successfully.",
        });
    }
    catch (error) {
        console.error("Error deleting group:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}));
