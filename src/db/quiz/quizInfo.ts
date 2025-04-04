import { QueryError } from "mysql2";
import { QuizInfo, QuizInfoData } from "../../model/quizInfo";
import db from "../index";

const getAllQuizInfo = async () => {
    const sql = "SELECT * from quiz_info"
    await db.execute(sql, (err: QueryError | null, result:QuizInfo) => {
        if(err){
            throw new Error("DB ERROR : getAllQuizInfo error occurred \n"+err);
        }else{
            const resultData: QuizInfoData = {
                ...result,
                key_words: result.key_words.split(",")
            }
            return resultData;
        }
    })
}

export const quizInfo = {
    getAllQuizInfo
}