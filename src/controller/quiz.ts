import {Request, Response, RequestHandler} from "express";
import {quizInfo} from "../db/quiz/quizInfo"

export type Quiz = {
    question: string,
    answer: string,
    type: "SHORT"
}

const getAllQuiz:RequestHandler = async(req, res) => {
    console.log("GET /quiz/list START");
    try{
        const data = await quizInfo.getAllQuizInfo();
        res.status(200).send(data);
    }catch(e: any){
        console.log(e);
        res.status(500).send("데이터 조회에 문제가 발생했습니다.");
    }
    console.log("GET /quiz/list END");
}

const insertQuizs:RequestHandler = async (req, res) => {
    console.log("POST /quiz/list START");
    try{
        const content = req.body.message;
        const quizs = content.split("\n");
        let newQuizList:Quiz[] = [];
        for(let i=0; i<quizs.length; i+=2){
            let quiz:Quiz = {
                question: quizs[i].split(". ")[1],
                answer: quizs[i+1].split("* 답변: ")[1],
                type: "SHORT"
            }
            newQuizList.push(quiz);
        }

        const data = await quizInfo.insertQuizInfo(newQuizList);
        res.status(200).send(data);
    }catch(e: any){
        console.log(e);
        res.status(500).send("데이터 삽입에 문제가 발생했습니다.");
    }
    console.log("POST /quiz/list END");
}

export const controller = {
    getAllQuiz,
    insertQuizs
}