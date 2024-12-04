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
export const saveMessageToDatabase = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield prisma.message.create({
            data: {
                messageContent: data.messageContent,
                groupId: data.groupId,
                messageCreatorId: data.messageCreatorId,
            },
            include: {
                creator: { select: { id: true, fullName: true, profilePic: true } },
                group: { select: { groupId: true, groupName: true } },
            },
        });
        return message;
    }
    catch (error) {
        console.error("Error saving message to database:", error);
        throw new Error("Failed to save message");
    }
});
