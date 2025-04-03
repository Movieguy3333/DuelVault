import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  loginUser,
  updateCollection,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateCollection);
router.post("/login", loginUser);
export default router;
