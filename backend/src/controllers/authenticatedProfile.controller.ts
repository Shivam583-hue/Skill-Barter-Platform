import * as express from "express";
import { Request, Response } from "express";
import { prisma } from "../clientInstance.js";

// Get Profile by ID
export const getAuthenticatedProfile = (async (req: Request, res: Response) => {
  const id = Number(req.params.userId);

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid user ID." });
  }

  try {
    const profile = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        fullName: true,
        profilePic: true,
        username: true,
        bio: true,
        portfolio: true,
        createdAt: true,
      },
    });

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }
    res.json({ success: true, data: profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ success: false, error: "Internal server error." });
  }
}) as express.RequestHandler;

// Update Profile
export const updateAuthenticatedProfile = (async (
  req: Request,
  res: Response,
) => {
  const id = Number(req.params.userId);
  const { profilePic, bio, portfolio } = req.body;

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid user ID." });
  }

  try {
    // Validate that at least one field is being updated
    if (!profilePic && !bio && !portfolio) {
      return res.status(400).json({
        success: false,
        message: "At least one field must be updated.",
      });
    }

    const updatedProfile = await prisma.user.update({
      where: { id },
      data: {
        ...(profilePic && { profilePic }),
        ...(bio && { bio }),
        ...(portfolio && { portfolio }),
      },
    });

    res.json({
      success: true,
      message: "Profile updated successfully.",
      data: updatedProfile,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ success: false, error: "Internal server error." });
  }
}) as express.RequestHandler;
