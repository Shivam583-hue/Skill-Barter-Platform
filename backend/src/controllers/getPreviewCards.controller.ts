import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const hundredHoursAgo = new Date(Date.now() - 100 * 60 * 60 * 1000);

export const getDesigner = async (req: Request, res: Response) => {
  try {
    const recentDesigns = await prisma.designerOpportunity.findMany({
      where: {
        createdAt: { gte: hundredHoursAgo },
      },
      include: {
        user: {
          select: {
            fullName: true,
            profilePic: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      count: recentDesigns.length,
      data: recentDesigns,
    });
  } catch (error) {
    console.error("Error fetching recentDesigns", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const getDeveloper = async (req: Request, res: Response) => {
  try {
    const recentDevelopers = await prisma.developerOpportunity.findMany({
      where: {
        createdAt: { gte: hundredHoursAgo },
      },
      include: {
        user: {
          select: {
            fullName: true,
            profilePic: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      count: recentDevelopers.length,
      data: recentDevelopers,
    });
  } catch (error) {
    console.error("Error fetching recent developer opportunities", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const getDsa = async (req: Request, res: Response) => {
  try {
    const recentDsa = await prisma.dsaStuff.findMany({
      where: { createdAt: { gte: hundredHoursAgo } },
      include: {
        user: {
          select: {
            fullName: true,
            profilePic: true,
          },
        },
      },
    });
    res.json({ success: true, count: recentDsa.length, data: recentDsa });
  } catch (error) {
    console.error("Error fetching recent DSA posts", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const getFlex = async (req: Request, res: Response) => {
  try {
    const recentFlex = await prisma.flex.findMany({
      where: { createdAt: { gte: hundredHoursAgo } },
      include: {
        user: {
          select: {
            fullName: true,
            profilePic: true,
          },
        },
      },
    });
    res.json({ success: true, count: recentFlex.length, data: recentFlex });
  } catch (error) {
    console.error("Error fetching recent flex posts", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const getJobs = async (req: Request, res: Response) => {
  try {
    const recentJobs = await prisma.jobOpportunity.findMany({
      where: {
        //@ts-ignore
        createdAt: { gte: new Date(Date.now() - 100 * 60 * 60 * 1000) },
      },
    }); // First test without any conditions

    res.json({
      success: true,
      count: recentJobs.length,
      data: recentJobs,
    });
  } catch (error) {
    console.error("Error fetching jobs", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
