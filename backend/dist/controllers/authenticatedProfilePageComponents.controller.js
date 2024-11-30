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
//----------------design---------------
export const getAuthenticatedDesigns = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.userId);
    if (isNaN(userId)) {
        return res
            .status(400)
            .json({ success: false, message: "Invalid user ID." });
    }
    try {
        const userDesigns = yield prisma.designerOpportunity.findMany({
            where: { userId },
            include: {
                user: { select: { id: true, fullName: true, profilePic: true } },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        if (!userDesigns.length) {
            return res
                .status(404)
                .json({ success: false, message: "No Designs found for this user." });
        }
        res.status(200).json({ success: true, data: userDesigns });
    }
    catch (error) {
        console.error("Error retrieving user Designs:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const deleteAuthenticatedDesigns = ((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.userId);
    const designerOpportunity_id = Number(req.params.designId);
    if (isNaN(userId) || isNaN(designerOpportunity_id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user of designerOpportunity id.",
        });
    }
    try {
        const design = yield prisma.designerOpportunity.findFirst({
            where: { designerOpportunity_id, userId },
        });
        if (!design) {
            return res
                .status(404)
                .json({ success: false, message: "Design Opportunity not found." });
        }
        yield prisma.designerOpportunity.deleteMany({
            where: { designerOpportunity_id, userId },
        });
        res.status(200).json({
            success: true,
            message: "Designer Opportunity deleted successfully.",
        });
    }
    catch (error) {
        console.error("Error deleting design Opportunity:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}));
//----------------developer------------
export const getAuthenticatedDevelopments = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.userId);
    if (isNaN(userId)) {
        return res
            .status(400)
            .json({ success: false, message: "Invalid user ID." });
    }
    try {
        const userDevelopments = yield prisma.developerOpportunity.findMany({
            where: { userId },
            include: {
                user: { select: { id: true, fullName: true, profilePic: true } },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        if (!userDevelopments.length) {
            return res.status(404).json({
                success: false,
                message: "No Developments found for this user.",
            });
        }
        res.status(200).json({ success: true, data: userDevelopments });
    }
    catch (error) {
        console.error("Error retrieving user Developments:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const deleteAuthenticatedDevelopments = ((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.userId);
    const developerOpportunity_id = Number(req.params.developmentId);
    if (isNaN(userId) || isNaN(developerOpportunity_id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user of developerOpportunity id.",
        });
    }
    try {
        const design = yield prisma.developerOpportunity.findFirst({
            where: { developerOpportunity_id, userId },
        });
        if (!design) {
            return res
                .status(404)
                .json({ success: false, message: "Developer Opportunity not found." });
        }
        yield prisma.developerOpportunity.deleteMany({
            where: { developerOpportunity_id, userId },
        });
        res.status(200).json({
            success: true,
            message: "Developer Opportunity deleted successfully.",
        });
    }
    catch (error) {
        console.error("Error deleting developer Opportunity:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}));
//----------------flex------------------
export const getAuthenticatedFlex = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.userId);
    if (isNaN(userId)) {
        return res
            .status(400)
            .json({ success: false, message: "Invalid user ID." });
    }
    try {
        const userFlex = yield prisma.flex.findMany({
            where: { userId },
            include: {
                user: { select: { id: true, fullName: true, profilePic: true } },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        if (!userFlex.length) {
            return res.status(404).json({
                success: false,
                message: "No flex posts found for this user.",
            });
        }
        res.status(200).json({ success: true, data: userFlex });
    }
    catch (error) {
        console.error("Error retrieving user flex posts:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const deleteAuthenticatedFlex = ((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.userId);
    const flex_id = Number(req.params.flexId);
    if (isNaN(userId) || isNaN(flex_id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user of flex id.",
        });
    }
    try {
        const design = yield prisma.flex.findFirst({
            where: { flex_id, userId },
        });
        if (!design) {
            return res
                .status(404)
                .json({ success: false, message: "flex post not found." });
        }
        yield prisma.flex.deleteMany({
            where: { flex_id, userId },
        });
        res.status(200).json({
            success: true,
            message: "flex post deleted successfully.",
        });
    }
    catch (error) {
        console.error("Error deleting flex post:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}));
//----------------jobs-----------------
export const getAuthenticatedJobs = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.userId);
    if (isNaN(userId)) {
        return res
            .status(400)
            .json({ success: false, message: "Invalid user ID." });
    }
    try {
        const userJobs = yield prisma.jobOpportunity.findMany({
            include: {
                user: { select: { id: true, fullName: true, profilePic: true } },
            },
            where: { userId },
            orderBy: {
                createdAt: "desc",
            },
        });
        if (!userJobs.length) {
            return res.status(404).json({
                success: false,
                message: "No Job posts found for this user.",
            });
        }
        res.status(200).json({ success: true, data: userJobs });
    }
    catch (error) {
        console.error("Error retrieving user job posts:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const deleteAuthenticatedJobs = ((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.userId);
    const jobOpportunity_id = Number(req.params.jobsId);
    if (isNaN(userId) || isNaN(jobOpportunity_id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user of job id.",
        });
    }
    try {
        const design = yield prisma.jobOpportunity.findFirst({
            where: { jobOpportunity_id, userId },
        });
        if (!design) {
            return res
                .status(404)
                .json({ success: false, message: "flex post not found." });
        }
        yield prisma.jobOpportunity.deleteMany({
            where: { jobOpportunity_id, userId },
        });
        res.status(200).json({
            success: true,
            message: "flex post deleted successfully.",
        });
    }
    catch (error) {
        console.error("Error deleting job post:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}));
