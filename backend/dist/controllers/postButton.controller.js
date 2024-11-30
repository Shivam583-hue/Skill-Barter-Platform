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
export const designerOpportunity = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, content, userId } = req.body;
    if (!title || !description || !content || !userId)
        return res
            .status(400)
            .json({ success: false, message: "All Fields are required." });
    const userExists = yield prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) {
        return res
            .status(400)
            .json({ success: false, message: "User does not exist." });
    }
    try {
        const newDesignerOpportunity = yield prisma.designerOpportunity.create({
            data: {
                title,
                description,
                content,
                userId,
            },
        });
        res
            .status(201)
            .json({ success: true, designerOpportunity: newDesignerOpportunity });
    }
    catch (error) {
        console.error("Error creating designer opportunity", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const developerOpportunity = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, content, userId } = req.body;
    if (!title || !description || !content || !userId)
        return res
            .status(400)
            .json({ success: false, message: "All Fields are required." });
    const userExists = yield prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) {
        return res
            .status(400)
            .json({ success: false, message: "User does not exist." });
    }
    try {
        const newDeveloperOpportunity = yield prisma.developerOpportunity.create({
            data: {
                title,
                description,
                content,
                userId,
                commentCount: 0,
            },
        });
        res
            .status(201)
            .json({ success: true, developerOpportunity: newDeveloperOpportunity });
    }
    catch (error) {
        console.error("Error creating developer opportunity", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const dsaStuff = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, title, description, userId } = req.body;
    if (!content || !title || !description || !userId)
        return res
            .status(201)
            .json({ success: false, message: "All fields required" });
    const userExists = yield prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) {
        return res
            .status(400)
            .json({ success: false, message: "User does not exist." });
    }
    try {
        const newDsaPost = yield prisma.dsaStuff.create({
            data: {
                title,
                content,
                description,
                userId,
            },
        });
        res.status(201).json({ success: true, newDsaPost });
    }
    catch (error) {
        console.error("Error creating DSAPost:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const flex = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, title, description, userId } = req.body;
    if (!content || !title || !description || !userId)
        return res
            .status(201)
            .json({ success: false, message: "All fields required" });
    const userExists = yield prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) {
        return res
            .status(400)
            .json({ success: false, message: "User does not exist." });
    }
    try {
        const newFlex = yield prisma.flex.create({
            data: {
                title,
                content,
                description,
                userId,
            },
        });
        res.status(201).json({ success: true, newFlex });
    }
    catch (error) {
        console.error("Error creating Flex Post:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
export const jobOpportunity = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, company, location, salary, applyLink, userId } = req.body;
    if (!title ||
        !description ||
        !company ||
        !location ||
        !salary ||
        !applyLink ||
        !userId)
        return res
            .status(400)
            .json({ success: false, message: "All fields are required" });
    const userExists = yield prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) {
        return res
            .status(400)
            .json({ success: false, message: "User does not exist." });
    }
    try {
        const newJob = yield prisma.jobOpportunity.create({
            data: {
                title,
                description,
                company,
                location,
                salary,
                applyLink,
                userId,
            },
        });
        return res.status(201).json({
            success: true,
            message: "Job opportunity created",
            data: newJob,
        });
    }
    catch (error) {
        console.error("Error creating Job opportunity:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}));
