import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDb.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app =express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json({ limit: "50mb" })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());
// Routes
app.use("/api/users", userRoutes);
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));