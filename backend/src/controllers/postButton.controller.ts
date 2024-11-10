import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

interface DesignerOpportunity {
  title: string;
  description: string;
  content: string;
  userId: number;
}

interface DeveloperOpportunity {
  title: string;
  description: string;
  content: string;
  userId: number;
}

export const designerOpportunity = async (req: Request, res: Response) => {
  const { title, description, content, userId } =
    req.body as DesignerOpportunity;

  if (!title || !description || !content || !userId)
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
        content,
        userId,
      },
    });
    res
      .status(201)
      .json({ success: true, designerOpportunity: newDesignerOpportunity });
  } catch (error) {
    console.error("Error creating designer opportunity", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const developerOpportunity = async (req: Request, res: Response) => {
  const { title, description, content, userId } =
    req.body as DeveloperOpportunity;

  if (!title || !description || !content || !userId)
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
};

export const dsaStuff = async (req: Request, res: Response) => {
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
};

export const flex = async (req: Request, res: Response) => {
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
};

export const jobOpportunity = async (req: Request, res: Response) => {
  const { description, company, location, salary, applyLink, userId } =
    req.body;

  if (!description || !company || !location || !salary || !applyLink || !userId)
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
        description,
        company,
        location,
        salary,
        applyLink,
        userId,
      },
    });
  } catch (error) {
    console.error("Error creating Job opportunity:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
