import express from "express";
import { createPost } from "../controllers/postController";

const router = express.Router();
router.post("/create", protectRoute, createPost);
export default router;