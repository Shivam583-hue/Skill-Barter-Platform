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
export const specificDesigns = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const designerOpportunity_id = Number(req.params.designerOpportunity_id);
    try {
        const oneOpportunity = yield prisma.designerOpportunity.findUnique({
            where: { designerOpportunity_id },
            include: {
                user: {
                    select: {
                        fullName: true,
                        profilePic: true,
                        id: true,
                    },
                },
                comments: {
                    include: {
                        user: { select: { fullName: true, profilePic: true } },
                    },
                    orderBy: { createdAt: "asc" },
                },
            },
        });
        if (!oneOpportunity) {
            return res.status(404).json({
                success: false,
                error: "Opportunity not found",
            });
        }
        res.json({ success: true, data: oneOpportunity });
    }
    catch (error) {
        console.error("Error fetching Opportunity : ", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}));
export const specificDevelopments = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const developerOpportunity_id = Number(req.params.developerOpportunity_id);
    try {
        const oneOpportunity = yield prisma.developerOpportunity.findUnique({
            where: { developerOpportunity_id },
            include: {
                user: {
                    select: {
                        fullName: true,
                        profilePic: true,
                        id: true,
                    },
                },
                comments: {
                    include: {
                        user: { select: { fullName: true, profilePic: true } },
                    },
                    orderBy: { createdAt: "asc" },
                },
            },
        });
        if (!oneOpportunity) {
            return res.status(404).json({
                success: false,
                error: "Opportunity not found",
            });
        }
        res.json({ success: true, data: oneOpportunity });
    }
    catch (error) {
        console.error("Error fetching Opportunity : ", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}));
export const specificDsa = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dsaStuff_id = Number(req.params.dsaStuff_id);
    try {
        const oneOpportunity = yield prisma.dsaStuff.findUnique({
            where: { dsaStuff_id },
            include: {
                user: {
                    select: {
                        fullName: true,
                        profilePic: true,
                    },
                },
            },
        });
        if (!oneOpportunity) {
            return res.status(404).json({
                success: false,
                error: "Post not found",
            });
        }
        res.json({ success: true, data: oneOpportunity });
    }
    catch (error) {
        console.error("Error fetching Post : ", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}));
export const specificFlex = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const flex_id = Number(req.params.flex_id);
    try {
        const oneOpportunity = yield prisma.flex.findUnique({
            where: { flex_id },
            include: {
                user: {
                    select: {
                        fullName: true,
                        profilePic: true,
                    },
                },
            },
        });
        if (!oneOpportunity) {
            return res.status(404).json({
                success: false,
                error: "Post not found",
            });
        }
        res.json({ success: true, data: oneOpportunity });
    }
    catch (error) {
        console.error("Error fetching Post : ", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}));
export const specificJob = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobOpportunity_id = Number(req.params.jobOpportunity_id);
    try {
        const oneOpportunity = yield prisma.jobOpportunity.findUnique({
            where: { jobOpportunity_id },
            include: {
                user: {
                    select: {
                        fullName: true,
                        profilePic: true,
                    },
                },
            },
        });
        if (!oneOpportunity) {
            return res.status(404).json({
                success: false,
                error: "Post not found",
            });
        }
        res.json({ success: true, data: oneOpportunity });
    }
    catch (error) {
        console.error("Error fetching Post : ", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}));
