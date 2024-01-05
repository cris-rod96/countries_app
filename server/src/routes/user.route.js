import express from "express";
import middlewares from "../middlewares/index.middlewares.js";
import controllers from "../controllers/index.controllers.js";

const {
  activateUser,
  getUser,
  updateUser,
  deleteUser,
  registerUser,
  recovery,
} = controllers.userControllers;
const { isValidToken, isAdmin } = middlewares.validateToken;

const router = express();
router.post("/forgotPassword", recovery.forgotPassword);
router.get("/list/all", isValidToken, isAdmin, getUser.all);
router.get("/list/:id", isValidToken, isAdmin, getUser.byID);
router.post("/register", registerUser);
router.delete("/delete/:id", isValidToken, deleteUser);
router.put("/edit/:id", isValidToken, updateUser);

router.put("/activate", activateUser);

export default router;
