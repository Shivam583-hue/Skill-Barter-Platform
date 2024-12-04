import { prisma } from "../clientInstance.js";

export const saveMessageToDatabase = async (data: {
  messageContent: string;
  groupId: number;
  messageCreatorId: number;
}) => {
  try {
    const message = await prisma.message.create({
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
  } catch (error) {
    console.error("Error saving message to database:", error);
    throw new Error("Failed to save message");
  }
};
