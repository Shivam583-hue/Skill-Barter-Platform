import { Status } from "@prisma/client";
import { prisma } from "../clientInstance.js";
import express from "express";

interface Proposal {
  groupId: number;
  senderId: number;
  receiverId: number;
  id: number;
  content: string;
}

export const sendProposal = (async (req, res) => {
  const { groupId, senderId, receiverId, content } = req.body as Proposal;

  if (!senderId || !groupId || !receiverId || !content) {
    return res.status(202).json({ success: false, msg: "Invalid request" });
  }

  const parsedGroupId = Number(groupId);
  const parsedreceiverId = Number(receiverId);

  try {
    const response = await prisma.proposal.create({
      data: {
        senderId,
        groupId: parsedGroupId,
        receiverId: parsedreceiverId,
        content,
        status: Status.PENDING,
      },
    });
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log("Error Occured Dekh Le apna", error);
  }
}) as express.RequestHandler;

export const getAuthenticatedUsersProposals = (async (req, res) => {
  const { receiverId } = req.query;
  const parsedReceiverId = Number(receiverId);

  if (isNaN(parsedReceiverId)) {
    return res.json({
      success: false,
      message: "Invalid receiver ID.",
    });
  }

  try {
    const response = await prisma.proposal.findMany({
      where: {
        receiverId: parsedReceiverId,
      },
      include: {
        sender: {
          select: {
            id: true,
            fullName: true,
            profilePic: true,
          },
        },
        receiver: {
          select: {
            id: true,
            fullName: true,
            profilePic: true,
          },
        },
      },
    });

    res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.log("Error occurred:", error);
    res.json({
      success: false,
      message: "An error occurred while fetching proposals.",
    });
  }
}) as express.RequestHandler;

export const acceptProposal = (async (req, res) => {
  // TODO : add the chat functionality later
  const { id, senderId, receiverId, content, groupId } = req.body as Proposal;

  if (!id || !senderId || !receiverId || !content || !groupId) {
    return res.status(202).json({ success: false, msg: "Invalid request" });
  }
  try {
    const response = await prisma.proposal.update({
      where: {
        id,
      },
      data: {
        status: "ACCEPTED",
      },
    });
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log("Error hogya", error);
  }
}) as express.RequestHandler;

export const rejectProposal = (async (req, res) => {
  const { id, senderId, receiverId, content } = req.body as Proposal;

  if (!id || !senderId || !receiverId || !content) {
    return res.status(202).json({ success: false, msg: "Invalid request" });
  }
  try {
    const response = await prisma.proposal.update({
      where: {
        id,
      },
      data: {
        status: "DENIED",
      },
    });
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log("Error hogya", error);
  }
}) as express.RequestHandler;
