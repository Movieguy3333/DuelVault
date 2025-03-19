import express from "express";
import {
  getUser,
  handlePostRequest,
  loginUser,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").get(getUser).post(handlePostRequest);
router.post("/login", loginUser);
export default router;
