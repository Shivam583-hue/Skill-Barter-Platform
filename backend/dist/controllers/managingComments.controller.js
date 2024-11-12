var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const postDesignerComment = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, userId, designerOpportunity_id } = req.body;
    if (!content || !userId || !designerOpportunity_id)
        return res
            .status(400)
            .json({ success: false, message: "All fields are required." });
    if (typeof content !== "string" || content.length > 500) {
        // Example length check
        return res.status(400).json({
            success: false,
            message: "Content must be a string and less than 500 characters.",
        });
    }
    const userIdnum = Number(userId);
    const dO_idnum = Number(designerOpportunity_id);
    if (isNaN(userIdnum) || isNaN(dO_idnum))
        return res.status(400).json({
            success: false,
            message: "Invalid designer post ID or user ID.",
        });
    try {
        const newComment = yield prisma.designerOpportunityComment.create({
            data: {
                content,
                userId: userIdnum,
                designerOpportunity_id: dO_idnum,
            },
        });
        res.status(201).json({
            success: true,
            message: "Comment added successfully",
            data: newComment,
        });
    }
    catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const postDeveloperComment = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, userId, developerOpportunity_id } = req.body;
    if (!content || !userId || !developerOpportunity_id)
        return res
            .status(400)
            .json({ success: false, message: "All fields are required." });
    if (typeof content !== "string" || content.length > 500) {
        // Example length check
        return res.status(400).json({
            success: false,
            message: "Content must be a string and less than 500 characters.",
        });
    }
    const userIdnum = Number(userId);
    const dOO_id = Number(developerOpportunity_id);
    if (isNaN(userId) || isNaN(dOO_id))
        return res.status(400).json({
            success: false,
            message: "Invalid developer post ID or user ID.",
        });
    try {
        const anothernewComment = yield prisma.developerOpportunityComment.create({
            data: {
                content,
                userId: userIdnum,
                developerOpportunity_id: dOO_id,
            },
        });
        res.status(201).json({
            success: true,
            message: "Comment added successfully",
            data: anothernewComment,
        });
    }
    catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const getDesignerComment = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentDesignerComments = yield prisma.designerOpportunityComment.findMany({
            include: {
                user: {
                    select: {
                        username: true,
                        profilePic: true,
                    },
                },
            },
        });
        res.json({ success: true, data: recentDesignerComments });
    }
    catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const getDeveloperComment = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentDeveloperComments = yield prisma.developerOpportunityComment.findMany({
            include: {
                user: {
                    select: {
                        username: true,
                        profilePic: true,
                    },
                },
            },
        });
        res.json({ success: true, data: recentDeveloperComments });
    }
    catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
