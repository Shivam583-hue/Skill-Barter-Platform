import express, { Request, Response } from "express"
import { prisma } from "../clientInstance.js"

export const getSpecificGroupDetails = (async (req: Request, res: Response) => { }) as express.RequestHandler;

export const getMembersInAGroup = (async (req: Request, res: Response) => { }) as express.RequestHandler;

export const getMessagesInAGroup = (async (req: Request, res: Response) => { }) as express.RequestHandler;

export const groupJoinedbyAuthenticatedUser = (async (req: Request, res: Response) => { }) as express.RequestHandler;

export const groupsCreatedByAuthenticatedUser = (async (req: Request, res: Response) => { }) as express.RequestHandler;

export const createGroup = (async (req: Request, res: Response) => { }) as express.RequestHandler;

export const addMembers = (async (req: Request, res: Response) => { }) as express.RequestHandler;

export const removeMembers = (async (req: Request, res: Response) => { }) as express.RequestHandler;

export const deleteGroup = (async (req: Request, res: Response) => { }) as express.RequestHandler;

