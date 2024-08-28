import QuizDataList from '../components/quiz/QuizDataList';
import QuizDataItem from '../components/quiz/QuizDataItem';
import QuizLogic from '../components/quiz/QuizLogic';

const QuizPage = () => {
    const { answers, handleAnswerChange, resultScore, setAnswer } = QuizLogic(QuizDataList); 

    const handleSubmit = () => { //shows the score when clicking on the results
        const score = resultScore();
        alert(`Your score is ${score} out of ${QuizDataList.length} points!`);
    };
 
    const handleRestart = () => { // this handle empties the answers array and resets the quiz
        setAnswer(Array(QuizDataList.length).fill(null));
        window.scrollTo(0, 0);
    };

    return (
        <section className="container mt-4 p-2 w-50">
            <h2>Want to test your knowledge? </h2>
            <h3 className="mb-4">Take the quiz!</h3>
            <div>
                {QuizDataList.map((quizData, index) => (
                    <QuizDataItem 
                        key={quizData.id}
                        quizData={quizData} 
                        currentAnswer={answers[index]} 
                        handleAnswerChange={(option) => handleAnswerChange(index, option)} 
                    />
                ))}
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleSubmit} className="btn bg-fun-btn m-3 text-light fw-bold"> 
                    See your results!
                </button>
                <button onClick={handleRestart} className='btn bg-fun-btn m-3 text-light fw-bold'>
                    Restart
                </button>
            </div>
            
        </section>
    );
};

export default QuizPage;