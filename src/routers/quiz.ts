import {controller} from "../controller/quiz";
import express from "express";

const router = express.Router();

router.get("/list", controller.getAllQuiz);

export default router;