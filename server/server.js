import app from "./index.js";
import mongoose from "mongoose";

const DB =
  "mongodb+srv://movieguy3333:YLitYwBf7bzWUVcp@cluster0.padtks9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB without outdated options
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
