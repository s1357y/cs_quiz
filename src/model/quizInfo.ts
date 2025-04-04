export type QuizInfo = {
    id: number,
    question: string,
    answer: string,
    type: "SHORT" | "DESCRIPTIVE",
    question_type_id: number,
    created_at: Date,
    updated_at: Date
};