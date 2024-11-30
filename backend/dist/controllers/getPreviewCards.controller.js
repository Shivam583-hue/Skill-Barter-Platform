var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const hundredHoursAgo = new Date(Date.now() - 100 * 60 * 60 * 1000);
import { prisma } from "../clientInstance.js";
export const getDesigner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentDesigns = yield prisma.designerOpportunity.findMany({
            where: {
                createdAt: { gte: hundredHoursAgo },
            },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        profilePic: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        res.json({
            success: true,
            count: recentDesigns.length,
            data: recentDesigns,
        });
    }
    catch (error) {
        console.error("Error fetching recentDesigns", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});
export const getDeveloper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentDevelopers = yield prisma.developerOpportunity.findMany({
            where: {
                createdAt: { gte: hundredHoursAgo },
            },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        profilePic: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        res.json({
            success: true,
            count: recentDevelopers.length,
            data: recentDevelopers,
        });
    }
    catch (error) {
        console.error("Error fetching recent developer opportunities", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});
export const getDsa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentDsa = yield prisma.dsaStuff.findMany({
            where: { createdAt: { gte: hundredHoursAgo } },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        profilePic: true,
                    },
                },
            },
        });
        res.json({ success: true, count: recentDsa.length, data: recentDsa });
    }
    catch (error) {
        console.error("Error fetching recent DSA posts", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});
export const getFlex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentFlex = yield prisma.flex.findMany({
            where: { createdAt: { gte: hundredHoursAgo } },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        profilePic: true,
                    },
                },
            },
        });
        res.json({ success: true, count: recentFlex.length, data: recentFlex });
    }
    catch (error) {
        console.error("Error fetching recent flex posts", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});
export const getJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentJobs = yield prisma.jobOpportunity.findMany({
            where: {
                //@ts-ignore
                createdAt: { gte: new Date(Date.now() - 100 * 60 * 60 * 1000) },
            },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        profilePic: true,
                    },
                },
            },
        }); // First test without any conditions
        res.json({
            success: true,
            count: recentJobs.length,
            data: recentJobs,
        });
    }
    catch (error) {
        console.error("Error fetching jobs", error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});
