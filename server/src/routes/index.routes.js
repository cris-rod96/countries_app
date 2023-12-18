import express from "express";
import authRoutes from "./auth.route.js";
import activityRoutes from "./activity.route.js";
import userRoutes from "./user.route.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/activity", activityRoutes);
router.use("/users", userRoutes);
export default router;
