import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "A user must have a username"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
  },
  cardCollection: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
