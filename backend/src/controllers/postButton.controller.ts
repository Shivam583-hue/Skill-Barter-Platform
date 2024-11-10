import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const designerOpportunity = async (req: Request, res: Response) => {};

export const developerOpportunity = async (req: Request, res: Response) => {};

export const dsaStuff = async (req: Request, res: Response) => {};

export const flex = async (req: Request, res: Response) => {};

export const jobOpportunity = async (req: Request, res: Response) => {};
