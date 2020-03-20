export interface Question {
    id: string,
    title: string
    answerOne: string,
    answerTwo: string,
    answerThree: string,
    answerFour: string,
    correct: number
}

export interface Quiz {
    id: string,
    quizName: string,
    questions: Question[]
}
