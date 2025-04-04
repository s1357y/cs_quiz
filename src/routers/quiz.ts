import {controller} from "../controller/quiz";
import express from "express";

const router = express.Router();

router.get("/list", controller.getAllQuiz);
router.post("/list", controller.insertQuizs);

export default router;