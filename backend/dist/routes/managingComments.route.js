import express from "express";
import { getDesignerComment, getDeveloperComment, postDesignerComment, postDeveloperComment, } from "../controllers/managingComments.controller.js";
const router = express.Router();
//----------------post--------------------
router.post("/post/designerComment", postDesignerComment);
router.post("/post/developerComment", postDeveloperComment);
//---------------get----------------------
router.get("/get/designerComment/:designerOpportunity_id", getDesignerComment);
router.get("/get/developerComment/:developerOpportunity_id", getDeveloperComment);
export default router;
