import User from "../models/userModel.js";
import { sendLoginEmail } from "../utils/email.js";

export const loginNotification = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next();
    }

    await sendLoginEmail(user.email);
    console.log(`Login email sent to ${user.email}`);

    next();
  } catch (err) {
    console.error("Error sending login email:", err);
    next();
  }
};
