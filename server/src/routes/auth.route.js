import express from "express";
import controllers from "../controllers/index.controllers.js";
const router = express.Router();
const { login } = controllers.authControllers;

router.post("/login", login);

export default router;
