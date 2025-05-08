import cron from "node-cron";
import fetch from "node-fetch";
import User from "../models/userModel.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendNotification = async (
  email,
  cardName,
  priceAlertAmount,
  newPrice
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `🚀 Price Alert for ${cardName}!`,
    text: `Good news! The market price for ${cardName} has risen above $${priceAlertAmount} and is now $${
      Math.round(newPrice * 100) / 100
    }.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Notification sent to ${email} for ${cardName}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

cron.schedule("0 0 * * 0", async () => {
  //cron.schedule("*/1 * * * *", async () => {
  console.log("Running weekly card price check...");

  const users = await User.find();
  for (const user of users) {
    console.log(`Checking ${user.username}'s collection`);
    for (const card of user.cardCollection) {
      try {
        const response = await fetch(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(
            card.name
          )}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.data && data.data.length > 0) {
          const currentPrice = Number(
            data.data[0].card_prices[0].tcgplayer_price
          );
          const savedPrice = Number(card.card_prices[0].tcgplayer_price);
          const priceAlertAmount = Number(card.card_price_alert_amount);
          const priceAlertBoolean = card.card_price_alert;

          console.log(`Current price of ${data.data[0].name}: ${currentPrice}`);
          console.log(
            `Price alert amount of ${card.name}: ${priceAlertAmount}`
          );
          if (currentPrice && savedPrice) {
            if (
              Number(currentPrice) + 20 >= Number(priceAlertAmount) &&
              priceAlertBoolean
            ) {
              console.log(`Sending email to ${user.email}`);
              await sendNotification(
                user.email,
                card.name,
                priceAlertAmount,
                Number(currentPrice) + 20
              );
            }
          }
        }
      } catch (error) {
        console.error(`Error fetching price for ${card.name}:`, error);
      }
    }
  }
  console.log("Finished!");
});
