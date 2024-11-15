import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const specificDesigns = (async (req: Request, res: Response) => {
  const designerOpportunity_id = Number(req.params.designerOpportunity_id);
  try {
    const oneOpportunity = await prisma.designerOpportunity.findUnique({
      where: { designerOpportunity_id },
      include: {
        user: {
          select: {
            fullName: true,
            profilePic: true,
          },
        },
        comments: {
          include: {
            user: { select: { fullName: true, profilePic: true } },
          },
          orderBy: { createdAt: "asc" },
        },
      },
    });
    if (!oneOpportunity) {
      return res.status(404).json({
        success: false,
        error: "Opportunity not found",
      });
    }
    res.json({ success: true, data: oneOpportunity });
  } catch (error) {
    console.error("Error fetching Opportunity : ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}) as express.RequestHandler;

export const specificDevelopments = (async (req: Request, res: Response) => {
  const developerOpportunity_id = Number(req.params.developerOpportunity_id);
  try {
    const oneOpportunity = await prisma.developerOpportunity.findUnique({
      where: { developerOpportunity_id },
      include: {
        user: {
          select: {
            fullName: true,
            profilePic: true,
          },
        },
        comments: {
          include: {
            user: { select: { fullName: true, profilePic: true } },
          },
          orderBy: { createdAt: "asc" },
        },
      },
    });
    if (!oneOpportunity) {
      return res.status(404).json({
        success: false,
        error: "Opportunity not found",
      });
    }
    res.json({ success: true, data: oneOpportunity });
  } catch (error) {
    console.error("Error fetching Opportunity : ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}) as express.RequestHandler;

export const specificDsa = (async (req: Request, res: Response) => {
  const dsaStuff_id = Number(req.params.dsaStuff_id);
  try {
    const oneOpportunity = await prisma.dsaStuff.findUnique({
      where: { dsaStuff_id },
      include: {
        user: {
          select: {
            fullName: true,
            profilePic: true,
          },
        },
      },
    });
    if (!oneOpportunity) {
      return res.status(404).json({
        success: false,
        error: "Post not found",
      });
    }
    res.json({ success: true, data: oneOpportunity });
  } catch (error) {
    console.error("Error fetching Post : ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}) as express.RequestHandler;

export const specificFlex = (async (req: Request, res: Response) => {
  const flex_id = Number(req.params.flex_id);
  try {
    const oneOpportunity = await prisma.flex.findUnique({
      where: { flex_id },
      include: {
        user: {
          select: {
            fullName: true,
            profilePic: true,
          },
        },
      },
    });
    if (!oneOpportunity) {
      return res.status(404).json({
        success: false,
        error: "Post not found",
      });
    }
    res.json({ success: true, data: oneOpportunity });
  } catch (error) {
    console.error("Error fetching Post : ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}) as express.RequestHandler;

export const specificJob = (async (req: Request, res: Response) => {
  const jobOpportunity_id = Number(req.params.jobOpportunity_id);
  try {
    const oneOpportunity = await prisma.jobOpportunity.findUnique({
      where: { jobOpportunity_id },
      include: {
        user: {
          select: {
            fullName: true,
            profilePic: true,
          },
        },
      },
    });
    if (!oneOpportunity) {
      return res.status(404).json({
        success: false,
        error: "Post not found",
      });
    }
    res.json({ success: true, data: oneOpportunity });
  } catch (error) {
    console.error("Error fetching Post : ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}) as express.RequestHandler;
