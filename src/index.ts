import express, {Express} from "express";
import quizRouter from "./routers/quiz";
import quizDB from "./db"


const app : Express = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/quiz", quizRouter);

app.listen(PORT, () => {
    console.log("SERVER STARTED PORT AT "+ PORT);
})
