import express from "express";
import {
  designerOpportunity,
  developerOpportunity,
  dsaStuff,
  flex,
  jobOpportunity,
} from "../controllers/postButton.controller";

const router = express.Router();

router.post("/postoptions/designerOpportunity", designerOpportunity);
router.post("/postoptions/developerOpportunity", developerOpportunity);
router.post("/postoptions/dsaStuff", dsaStuff);
router.post("/postoptions/flex", flex);
router.post("/postoptions/jobOpportunity", jobOpportunity);

export default router;
