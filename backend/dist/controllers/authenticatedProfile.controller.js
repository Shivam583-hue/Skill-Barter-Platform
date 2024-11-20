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
// Get Profile by ID
export const getAuthenticatedProfile = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.userId);
    if (isNaN(id)) {
        return res
            .status(400)
            .json({ success: false, message: "Invalid user ID." });
    }
    try {
        const profile = yield prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                fullName: true,
                profilePic: true,
                username: true,
                bio: true,
                portfolio: true,
                createdAt: true,
            },
        });
        if (!profile) {
            return res
                .status(404)
                .json({ success: false, message: "User not found." });
        }
        res.json({ success: true, data: profile });
    }
    catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ success: false, error: "Internal server error." });
    }
}));
// Update Profile
export const updateAuthenticatedProfile = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.userId);
    const { profilePic, bio, portfolio } = req.body;
    if (isNaN(id)) {
        return res
            .status(400)
            .json({ success: false, message: "Invalid user ID." });
    }
    try {
        // Validate that at least one field is being updated
        if (!profilePic && !bio && !portfolio) {
            return res.status(400).json({
                success: false,
                message: "At least one field must be updated.",
            });
        }
        const updatedProfile = yield prisma.user.update({
            where: { id },
            data: Object.assign(Object.assign(Object.assign({}, (profilePic && { profilePic })), (bio && { bio })), (portfolio && { portfolio })),
        });
        res.json({
            success: true,
            message: "Profile updated successfully.",
            data: updatedProfile,
        });
    }
    catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ success: false, error: "Internal server error." });
    }
}));
