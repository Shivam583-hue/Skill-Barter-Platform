import express from "express";
import {
  getAuthenticatedProfile,
  updateAuthenticatedProfile,
} from "../controllers/authenticatedProfile.controller.js";

const router = express.Router();

router.get("/authenticatedProfile/:userId", getAuthenticatedProfile);

router.post("/update/authenticatedProfile/:userId", updateAuthenticatedProfile);

export default router;
