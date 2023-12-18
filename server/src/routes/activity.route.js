import express from "express";
import controllers from "../controllers/index.controllers.js";
const router = express.Router();
const { getActivity, createActivity, deleteActivity, updateActivity } =
  controllers.activityControllers;

const { all, byID, byCountry, byDescription, byStatus, bySeason } = getActivity;

// Get

router.get("/l/all", all);
router.get("/l/id/:id", byID);
// router.get("/l/country/")
router.get("/l/status", byStatus);
router.get("/l/season", bySeason);
router.get("/l/q", byDescription);

// FIN GET

router.post("/create", createActivity);
router.delete("/delete/:id", deleteActivity);
router.put("/update/:id", updateActivity);

export default router;
