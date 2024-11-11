import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postDesignerComment = (async (req: Request, res: Response) => {
  const { content, userId, designerOpportunity_id } = req.body;

  if (!content || !userId || !designerOpportunity_id)
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });

  if (typeof content !== "string" || content.length > 500) {
    // Example length check
    return res
      .status(400)
      .json({
        success: false,
        message: "Content must be a string and less than 500 characters.",
      });
  }

  const userIdnum = Number(userId);
  const dO_idnum = Number(designerOpportunity_id);

  if (isNaN(userIdnum) || isNaN(dO_idnum))
    return res
      .status(400)
      .json({
        success: false,
        message: "Invalid designer post ID or user ID.",
      });

  try {
    const newComment = await prisma.designerOpportunityComment.create({
      data: {
        content,
        userId: userIdnum,
        designerOpportunity_id: dO_idnum,
      },
    });
    res
      .status(201)
      .json({
        success: true,
        message: "Comment added successfully",
        data: newComment,
      });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}) as express.RequestHandler;

export const postDeveloperComment = (async (req: Request, res: Response) => {
  const { content, userId, developerOpportunity_id } = req.body;

  if (!content || !userId || !developerOpportunity_id)
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });

  if (typeof content !== "string" || content.length > 500) {
    // Example length check
    return res
      .status(400)
      .json({
        success: false,
        message: "Content must be a string and less than 500 characters.",
      });
  }

  const userIdnum = Number(userId);
  const dOO_id = Number(developerOpportunity_id);

  if (isNaN(userId) || isNaN(dOO_id))
    return res
      .status(400)
      .json({
        success: false,
        message: "Invalid developer post ID or user ID.",
      });

  try {
    const anothernewComment = await prisma.developerOpportunityComment.create({
      data: {
        content,
        userId: userIdnum,
        developerOpportunity_id: dOO_id,
      },
    });
    res
      .status(201)
      .json({
        success: true,
        message: "Comment added successfully",
        data: anothernewComment,
      });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}) as express.RequestHandler;

export const getDesignerComment = (async (
  req: Request,
  res: Response,
) => {}) as express.RequestHandler;

export const getDeveloperComment = (async (
  req: Request,
  res: Response,
) => {}) as express.RequestHandler;
