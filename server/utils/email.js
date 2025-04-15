import nodemailer from "nodemailer";

export const sendLoginEmail = async (userEmail) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Login Notification - DuelVault",
    text: `Hello,\n\nYou just logged into your DuelVault account.\n\nIf this wasn't you, please secure your account immediately.`,
  };

  await transporter.sendMail(mailOptions);
};
