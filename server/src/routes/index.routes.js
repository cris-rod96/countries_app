import express from "express";
import activityRoutes from "./activity.route.js";
import authRoutes from "./auth.route.js";
import countryRoutes from "./country.route.js";
import messageRoutes from "./message.route.js";
import userRoutes from "./user.route.js";
import middlewares from "../middlewares/index.middlewares.js";

const { isValidToken, isAdmin } = middlewares.validateToken;

const router = express.Router();

router.use("/activity", isValidToken, activityRoutes);
router.use("/countries", countryRoutes);
router.use("/auth", authRoutes);
router.use("/message", isValidToken, messageRoutes);
router.use("/users", userRoutes);
export default router;
