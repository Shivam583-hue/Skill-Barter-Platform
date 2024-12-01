import express, { RequestHandler } from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { addMembers, createGroup, deleteGroup, getMembersInAGroup, getSpecificGroupDetails, groupJoinedbyAuthenticatedUser, groupsCreatedByAuthenticatedUser, removeMembers } from "../controllers/group.controller.js";

const router = express.Router()

router.get("/groups/:groupId", getSpecificGroupDetails)
router.get("/groups/:groupId/members", getMembersInAGroup)
router.get("/groups/:groupId/messages", getMembersInAGroup)

router.get("/groupsJoinedbyAuthenticatedUser/:id", groupJoinedbyAuthenticatedUser)
router.get("/groupsCreatedByAuthenticatedUser/:id", groupsCreatedByAuthenticatedUser)

router.post("/createGroup", createGroup)
router.post("/addMembers", addMembers)
router.post("/removeMembers", removeMembers)

router.delete("/deleteGroup", authenticateUser as RequestHandler, deleteGroup)

export default router;
