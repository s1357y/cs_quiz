import { QuizInfo } from "../../model/quizInfo";
import db from "../index";
import { Quiz } from "../../controller/quiz";

const getAllQuizInfo = async () => {
    let sql = "SELECT * from quiz_info";
    try{
        return await db.query(sql);
    }catch(err){
        throw new Error("DB ERROR - getAllQuizInfo error occurred \n"+err);
    }
}

const insertQuizInfo = async (quizs: Quiz[]) => {
    let sql = "INSERT INTO `quiz_info` (`question`, `answer`, `type`) VALUES ?";

    let values = quizs.map((q) => [q.question, q.answer, q.type]);
    console.log(values);

    try{
        console.log(sql);
        let result = await db.query(sql, [values]);
        return result;
    }catch(err){
        throw new Error("DB ERROR - insertQuizInfo error occurred \n"+err);
    }
}

export const quizInfo = {
    getAllQuizInfo,
    insertQuizInfo
}