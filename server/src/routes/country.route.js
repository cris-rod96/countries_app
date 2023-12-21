import express from "express";
import controllers from "../controllers/index.controllers.js";
import middlewares from "../middlewares/index.middlewares.js";
const { all, byID, byName } = controllers.countryControllers;
const { isValidToken } = middlewares.validateToken;
const router = express.Router();

router.get("/list/all", all);
router.get("/list/country/:id", byID);
router.get("/list/country", byName);

export default router;
