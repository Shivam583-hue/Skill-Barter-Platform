import express from "express";
import { acceptProposal, getAuthenticatedUsersProposals, rejectProposal, sendProposal, } from "../controllers/proposals.controller.js";
const router = express.Router();
router.post("/sendProposal", sendProposal);
router.get("/getAuthenticatedUsersProposals", getAuthenticatedUsersProposals);
router.post("/acceptProposal", acceptProposal);
router.post("/rejectProposal", rejectProposal);
export default router;
