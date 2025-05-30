import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  loginUser,
  updateCollection,
  deleteUser,
} from "../controllers/userController.js";
import { loginNotification } from "../middleware/loginNotification.js";
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateCollection).delete(deleteUser);
router.post("/login", loginNotification, loginUser);
export default router;
