import express from "express";
import {
  getDesigner,
  getDeveloper,
  getDsa,
  getFlex,
  getJobs,
} from "../controllers/getPreviewCards.controller";

const router = express.Router();

router.get("/designerOpportunity", getDesigner);
router.get("/developerOpportunity", getDeveloper);
router.get("/dsaStuff", getDsa);
router.get("/flex", getFlex);
router.get("/jobOpportunity", getJobs);

export default router;
