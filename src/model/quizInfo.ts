export type QuizInfo = {
    id: number,
    question: string,
    answer: string,
    key_words: string,
    question_type_id: number,
    created_at: Date,
    updated_at: Date
};

export type QuizInfoData = {
    id: number,
    question: string,
    answer: string,
    key_words: string[],
    question_type_id: number,
    created_at: Date,
    updated_at: Date
}