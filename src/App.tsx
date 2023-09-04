import { useState } from 'react';
import { QuestionsList, Survey } from './components';
import { type Question } from './types/question';
import questionsJson from './mocks/questions.json';
import './App.css';

export function App() {
    const [questions, setQuestions] = useState<Question[]>(questionsJson as Question[]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finish, setFinish] = useState(false);

    const setRating = (rating: Question['rating']) => {
        const newQuestions = structuredClone(questions);
        newQuestions[currentQuestion].rating = rating;
        setQuestions(newQuestions);
    };

    const nextQuestion = () => setCurrentQuestion(prevState => prevState + 1);
    const prevQuestion = () => setCurrentQuestion(prevState => prevState - 1);
    const finishSurvey = () => setFinish(true);
    const resetSurvey = () => {
        setFinish(false);
        setCurrentQuestion(0);
        setQuestions(questionsJson as Question[]);
    };

    const isFinishSurvey = questions.some(question => question.rating === 0);

    return (
        <>
            <h1 className='text-3xl font-bold underline'>Encuesta</h1>
            <main className='w-full sm:px-10'>
            {!finish 
                ? <>
                    <QuestionsList 
                        questions={questions}
                        currentQuestion={currentQuestion}
                        setRating={setRating}
                        nextQuestion={nextQuestion}
                        prevQuestion={prevQuestion}
                    />
                    <button 
                        className={`bg-gray-300 hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 rounded-md ${isFinishSurvey ? 'opacity-50 hover:bg-gray-300' : ''}`}
                        onClick={finishSurvey}
                        disabled={isFinishSurvey}
                    >
                        Finalizar
                    </button>
                </>
                : <>
                    <Survey 
                        questions={questions}
                    />
                    <button 
                        className='bg-gray-300 hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 rounded-md mt-10'
                        onClick={resetSurvey}
                    >
                        Reiniciar
                    </button>
                </>
            }
            </main>
        </>
    );
}
