import express from "express";
import { ArticleController } from "../controllers";

const router = express.Router();

router.get("/", ArticleController.getAllArticles);

export default router;