import {Request, Response, RequestHandler} from "express";
import {quizInfo} from "../db/quiz/quizInfo"

const getAllQuiz:RequestHandler = (req, res) => {
    console.log("GET /quiz/list START");
    try{
        const data = quizInfo.getAllQuizInfo();
        res.sendStatus(200).send(data);
    }catch(e: any){
        res.sendStatus(500).send("데이터 조회에 문제가 발생했습니다.");
    }
    console.log("GET /quiz/list END");
}

export const controller = {
    getAllQuiz,
}