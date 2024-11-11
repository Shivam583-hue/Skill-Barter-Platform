import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import postButtonRoutes from "./routes/postButton.route.js";
import getPreviewCardsRoutes from "./routes/getPreviewCards.route.js";

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api", postButtonRoutes);
app.use("/api/preview", getPreviewCardsRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
