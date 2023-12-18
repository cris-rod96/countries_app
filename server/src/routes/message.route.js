import express from "express";
import controllers from "../controllers/index.controllers.js";

const { getMessages, updateMessage, deleteMessage, createMessage } =
  controllers.messageControllers;
const { all, byID, byStatus, byUser } = getMessages;
const router = express.Router();

// GET
router.get("/list/all", all);
router.get("/list/message/:id", byID);
router.get("/list/message/user", byUser);
router.get("/list/message/status", byStatus);
// FIN GET

router.post("/create", createMessage);
router.put("/update/:id", updateMessage);
router.delete("/delete/:id", deleteMessage);

export default router;
