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

    return (
        <>
            <h1 className='text-3xl font-bold underline'>Encuesta</h1>
            <main className='w-full p-10'>
            {!finish 
                ? <>
                    <QuestionsList 
                        questions={questions}
                        currentQuestion={currentQuestion}
                        setRating={setRating}
                        nextQuestion={nextQuestion}
                        prevQuestion={prevQuestion}
                    />
                    <button onClick={finishSurvey}>Finalizar</button>
                </>
                : <>
                    <Survey 
                        questions={questions}
                    />
                    <button onClick={resetSurvey}>Reinciar</button>
                </>
            }
            </main>
        </>
    );
}
