import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import postButtonRoutes from "./routes/postButton.route.js";
import authenticatedProfileRoutes from "./routes/authenticatedProfile.route.js";
import specificView from "./routes/specificView.route.js";
import managingComments from "./routes/managingComments.route.js";
import getPreviewCardsRoutes from "./routes/getPreviewCards.route.js";
import { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cookie",
      "Origin",
      "Accept",
    ],
    exposedHeaders: ["set-cookie"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);

// Route definitions
app.use("/api/auth", authRoutes);
app.use("/api", postButtonRoutes);
app.use("/api/preview", getPreviewCardsRoutes);
app.use("/api", authenticatedProfileRoutes);
app.use("/api/specificView", specificView);
app.use("/api/comments", managingComments);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
