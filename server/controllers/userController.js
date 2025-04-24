import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error. Could not fetch users." });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // use the id from the URL
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      data: {
        newUser: newUser,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      status: "success",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        cardCollection: user.cardCollection,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

export const updateCollection = async (req, res) => {
  try {
    const { collection } = req.body;
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.cardCollection = collection;

    const updatedUser = await user.save();

    res.status(200).json({
      status: "success",
      user: {
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        cardCollection: updatedUser.cardCollection, // Return the updated collection
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      message: `User ${user.username} has been deleted`,
    });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Server error. Could not delete user." });
  }
};
