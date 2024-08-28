import React from 'react';

type QuizDataItemProps = { // This type definition sets the datatype for the props that is used as parameters
    quizData: {
        id: number;
        image: string;
        question: string;
        options: string[];
    };
    currentAnswer: string;
    handleAnswerChange: (option: string) => void; // void indicates that the function returns nothing
}

const QuizDataItem: React.FC<QuizDataItemProps> = ({ quizData, currentAnswer, handleAnswerChange }) => {

    return (
        <article key={quizData.id} className="p-3 mb-5 bg-body shadow rounded">
            <img src={quizData.image} alt={`Image ${quizData.id}`} className="img-fluid mb-3" />
            <h4 className='fs-5'>{quizData.question}</h4>
            <div className="d-flex flex-wrap">
                <p>A:</p>
                {quizData.options.map((option, index) => (
                    <button
                        type='button'
                        key={index} 
                        className={`btn m-4 justify-content-center fw-bold ${currentAnswer === option ? 'btn-dark' : 'btn-outline-dark'}`} // currentAnswer === option ? handles the styling state of the button
                        onClick={() => handleAnswerChange(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </article>
    );
};

export default QuizDataItem;