import { useState } from "react";

const QuizLogic = (quizDataList) => {
    const [answers, setAnswer] = useState(Array(quizDataList.length).fill(null)); // array of null values

    const handleAnswerChange = (questionIndex, selectedAnswer) => { // handels the state/change of the selected answer
        const newAnswer = [...answers];
        newAnswer[questionIndex] = selectedAnswer;
        setAnswer(newAnswer);
    };

    const resultScore = () => { // calculates the score
        let score = 0;
        for (let i = 0; i < quizDataList.length; i++) {
            if (quizDataList[i].correctAnswer === answers[i]) {
                score++;
            }
        }
        return score;
    };

    return {
        answers,
        handleAnswerChange,
        resultScore,
        setAnswer
    };  

};

export default QuizLogic;