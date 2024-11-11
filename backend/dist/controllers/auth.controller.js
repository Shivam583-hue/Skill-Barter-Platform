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
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
const prisma = new PrismaClient();
export const signup = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, username, password, confirmPassword, email } = req.body;
        if (password != confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }
        //@ts-ignore
        const user = yield prisma.user.findUnique({ where: { username } });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }
        //hash password  
        const salt = yield bcrypt.genSalt(10);
        const hashedPassword = yield bcrypt.hash(password, salt);
        const profilePic = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        const newUser = yield prisma.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                email: email,
                profilePic: profilePic,
                bio: "",
                portfolio: "",
            }
        });
        generateTokenAndSetCookie(newUser.id, res);
        res.status(201).json({
            id: newUser.id,
            fullName: newUser.fullName,
            username: newUser.username,
            email: newUser.email,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
export const login = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        //@ts-ignore
        const user = yield prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.json({ Error: "user not found in database please sign up" });
        }
        const isPasswordCorrect = yield bcrypt.compare(password, (user === null || user === void 0 ? void 0 : user.password) || "");
        if (!isPasswordCorrect) {
            return res.json({ Error: " incorrect password" });
        }
        generateTokenAndSetCookie(user === null || user === void 0 ? void 0 : user.id, res);
        res.status(200).json({
            id: user === null || user === void 0 ? void 0 : user.id,
            fullName: user === null || user === void 0 ? void 0 : user.fullName,
            email: user === null || user === void 0 ? void 0 : user.email,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
export const logout = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "logged out successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
