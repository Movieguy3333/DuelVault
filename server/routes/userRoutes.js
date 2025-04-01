import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  loginUser,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser);
router.post("/login", loginUser);
export default router;
