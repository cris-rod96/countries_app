import express from "express";
import middlewares from "../middlewares/index.middlewares.js";
import controllers from "../controllers/index.controllers.js";

const { getUser, updateUser, deleteUser, registerUser } =
  controllers.userControllers;
const { isValidToken, isAdmin } = middlewares.validateToken;

const router = express();

router.get("/list/all", isValidToken, isAdmin, getUser.all);
router.get("/list/:id", isValidToken, isAdmin, getUser.byID);
router.post("/register", registerUser);
router.delete("/delete/:id", isValidToken, deleteUser);
router.put("/edit/:id", isValidToken, updateUser);

export default router;
