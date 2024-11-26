import express, { RequestHandler } from "express";
import {
  deleteAuthenticatedDesigns,
  deleteAuthenticatedDevelopments,
  deleteAuthenticatedFlex,
  deleteAuthenticatedJobs,
  getAuthenticatedDesigns,
  getAuthenticatedDevelopments,
  getAuthenticatedFlex,
  getAuthenticatedJobs,
} from "../controllers/authenticatedProfilePageComponents.controller.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

//----------------design---------------
router.get("/authenticatedProfile/designs/:userId", getAuthenticatedDesigns);
router.delete(
  "/authenticatedProfile/designs/:designId",authenticateUser as RequestHandler,
  deleteAuthenticatedDesigns,
);

//----------------developer------------
router.get(
  "/authenticatedProfile/developments/:userId",
  getAuthenticatedDevelopments,
);
router.delete(
  "/authenticatedProfile/developments/:developmentId",authenticateUser as RequestHandler,
  deleteAuthenticatedDevelopments,
);

//----------------flex------------------
router.get("/authenticatedProfile/flex/:userId", getAuthenticatedFlex);
router.delete(
  "/authenticatedProfile/flex/:flexId",authenticateUser as RequestHandler,
  deleteAuthenticatedFlex,
);

//----------------jobs-----------------
router.get("/authenticatedProfile/jobs/:userId", getAuthenticatedJobs);
router.delete(
  "/authenticatedProfile/jobs/:jobsId",authenticateUser as RequestHandler,
  deleteAuthenticatedJobs,
);

export default router;
