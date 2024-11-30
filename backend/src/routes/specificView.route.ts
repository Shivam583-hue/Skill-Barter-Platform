import express from "express";
import {
  specificDesigns,
  specificDevelopments,
  specificDsa,
  specificFlex,
  specificJob,
} from "../controllers/specificView.controller.js";

const router = express.Router();

router.get("/specificDesigns/:designerOpportunity_id", specificDesigns);
router.get(
  "/specificDevelopments/:developerOpportunity_id",
  specificDevelopments,
);
router.get("/specificDsa/:dsaStuff_id", specificDsa);
router.get("/specificFlex/:flex_id", specificFlex);
router.get("/specificJob/:jobOpportunity_id", specificJob);

export default router;
