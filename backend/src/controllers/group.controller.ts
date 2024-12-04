import express, { Request, Response } from "express";
import { prisma } from "../clientInstance.js";

export const getSpecificGroupDetails = (async (req: Request, res: Response) => {
  const groupId = Number(req.params.groupId);
  try {
    const groupDetails = await prisma.group.findUnique({
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
  } catch (error) {
    console.error("Error fetching Group Details: ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}) as express.RequestHandler;

export const getMembersInAGroup = (async (req: Request, res: Response) => {
  const groupId = Number(req.params.groupId);
  try {
    const group = await prisma.group.findUnique({
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
  } catch (error) {
    console.error("Error fetching Group Members: ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}) as express.RequestHandler;


export const getMessagesInAGroup = (async (req: Request, res: Response) => {
  const groupId = Number(req.params.groupId);
  const limit = parseInt(req.query.limit as string) || 20;
  const offset = parseInt(req.query.offset as string) || 0;

  try {
    const groupExists = await prisma.group.findUnique({
      where: { groupId },
    });

    if (!groupExists) {
      return res.status(404).json({
        success: false,
        error: "Group not found",
      });
    }

    const messages = await prisma.message.findMany({
      where: { groupId },
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
      include: { creator: true },
    });

    const totalMessages = await prisma.message.count({
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
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch messages",
    });
  }
}) as express.RequestHandler;

export const groupJoinedbyAuthenticatedUser = (async (
  req: Request,
  res: Response,
) => {
  const userId = parseInt(req.params.id);
  try {
    const userWithGroups = await prisma.user.findUnique({
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
  } catch (error) {
    console.error("Error fetching user groups: ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}) as express.RequestHandler;

export const groupsCreatedByAuthenticatedUser = (async (
  req: Request,
  res: Response,
) => {
  const userId = parseInt(req.params.id);
  try {
    const userWithCreatedGroups = await prisma.user.findUnique({
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
  } catch (error) {
    console.error("Error fetching user-created groups: ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}) as express.RequestHandler;

export const createGroup = (async (req: Request, res: Response) => {
  const { groupName, userId } = req.body;
  try {
    const group = await prisma.group.create({
      data: {
        groupName,
        creatorId: userId,
        members: {
          connect: { id: userId },
        },
      },
    });
    res.status(201).json({ success: true, data: group });
  } catch (error) {
    console.log("Failed to create group chat", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}) as express.RequestHandler;

export const addMembers = (async (req: Request, res: Response) => {
  const { userId, groupId } = req.body;
  if (!userId || !groupId) {
    return res.status(400).json({
      success: false,
      error: "User ID and Group ID are required",
    });
  }
  try {
    const response = await prisma.group.update({
      where: { groupId },
      data: {
        members: { connect: { id: userId } },
      },
    });
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error adding members: ", error);
    res.status(500).json({
      success: false,
      error: "Failed to add members to the group",
    });
  }
}) as express.RequestHandler;

export const removeMembers = (async (req: Request, res: Response) => {
  const { userId, groupId } = req.body;
  if (!userId || !groupId) {
    return res.status(400).json({
      success: false,
      error: "User ID and Group ID are required",
    });
  }
  try {
    const group = await prisma.group.findUnique({
      where: { groupId },
      include: { members: { where: { id: userId } } }
    });

    if (!group || group.members.length === 0) {
      return res.status(404).json({
        success: false,
        error: "User not found in this group",
      });
    }
    await prisma.group.update({
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
  } catch (error) {
    console.error("Error removing members: ", error);
    res.status(500).json({
      success: false,
      error: "Failed to remove members from the group",
    });
  }
}) as express.RequestHandler;

export const deleteGroup = (async (req: Request, res: Response) => {
  const userId = Number(req.userId);
  const { groupId } = req.body;
  if (isNaN(userId) || isNaN(groupId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid user or group Id .",
    });
  }

  try {
    const group = await prisma.group.findFirst({
      where: { groupId, creatorId: userId },
    });
    if (!group) {
      return res
        .status(404)
        .json({ success: false, message: "Design Opportunity not found." });
    }
    await prisma.group.delete({
      where: { groupId },
    });
    res.status(200).json({
      success: true,
      message: "Group deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}) as express.RequestHandler;
