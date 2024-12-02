import * as express from "express";
import { Request, Response } from "express";
import { prisma } from "../clientInstance.js";

interface DesignerOpportunity {
  title: string;
  description: string;
  content: string;
  groupId: number
  userId: number;
}

interface DeveloperOpportunity {
  title: string;
  description: string;
  content: string;
  groupId: number
  userId: number;
}

export const designerOpportunity = (async (req: Request, res: Response) => {
  const { title, description, content, userId, groupId } =
    req.body as DesignerOpportunity;

  if (!title || !description || !content || !userId || !groupId)
    return res
      .status(400)
      .json({ success: false, message: "All Fields are required." });

  const userExists = await prisma.user.findUnique({ where: { id: userId } });
  if (!userExists) {
    return res
      .status(400)
      .json({ success: false, message: "User does not exist." });
  }

  try {
    const newDesignerOpportunity = await prisma.designerOpportunity.create({
      data: {
        title,
        description,
        groupId,
        content,
        userId,
        commentCount: 0,
      },
    });
    res
      .status(201)
      .json({ success: true, designerOpportunity: newDesignerOpportunity });
  } catch (error) {
    console.error("Error creating designer opportunity", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}) as express.RequestHandler;

export const developerOpportunity = (async (req: Request, res: Response) => {
  const { title, description, content, userId, groupId } =
    req.body as DeveloperOpportunity;

  if (!title || !description || !content || !userId || !groupId)
    return res
      .status(400)
      .json({ success: false, message: "All Fields are required." });

  const userExists = await prisma.user.findUnique({ where: { id: userId } });
  if (!userExists) {
    return res
      .status(400)
      .json({ success: false, message: "User does not exist." });
  }

  try {
    const newDeveloperOpportunity = await prisma.developerOpportunity.create({
      data: {
        title,
        description,
        content,
        userId,
        groupId,
        commentCount: 0,
      },
    });
    res
      .status(201)
      .json({ success: true, developerOpportunity: newDeveloperOpportunity });
  } catch (error) {
    console.error("Error creating developer opportunity", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}) as express.RequestHandler;

export const dsaStuff = (async (req: Request, res: Response) => {
  const { content, title, description, userId } =
    req.body as DeveloperOpportunity;

  if (!content || !title || !description || !userId)
    return res
      .status(201)
      .json({ success: false, message: "All fields required" });

  const userExists = await prisma.user.findUnique({ where: { id: userId } });
  if (!userExists) {
    return res
      .status(400)
      .json({ success: false, message: "User does not exist." });
  }
  try {
    const newDsaPost = await prisma.dsaStuff.create({
      data: {
        title,
        content,
        description,
        userId,
      },
    });
    res.status(201).json({ success: true, newDsaPost });
  } catch (error) {
    console.error("Error creating DSAPost:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}) as express.RequestHandler;

export const flex = (async (req: Request, res: Response) => {
  const { content, title, description, userId } =
    req.body as DeveloperOpportunity;

  if (!content || !title || !description || !userId)
    return res
      .status(201)
      .json({ success: false, message: "All fields required" });

  const userExists = await prisma.user.findUnique({ where: { id: userId } });
  if (!userExists) {
    return res
      .status(400)
      .json({ success: false, message: "User does not exist." });
  }
  try {
    const newFlex = await prisma.flex.create({
      data: {
        title,
        content,
        description,
        userId,
      },
    });
    res.status(201).json({ success: true, newFlex });
  } catch (error) {
    console.error("Error creating Flex Post:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}) as express.RequestHandler;

export const jobOpportunity = (async (req: Request, res: Response) => {
  const { title, description, company, location, salary, applyLink, userId } =
    req.body;

  if (
    !title ||
    !description ||
    !company ||
    !location ||
    !salary ||
    !applyLink ||
    !userId
  )
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });

  const userExists = await prisma.user.findUnique({ where: { id: userId } });
  if (!userExists) {
    return res
      .status(400)
      .json({ success: false, message: "User does not exist." });
  }
  try {
    const newJob = await prisma.jobOpportunity.create({
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
  } catch (error) {
    console.error("Error creating Job opportunity:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}) as express.RequestHandler;
