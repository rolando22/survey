import { useState } from 'react';
import { QuestionsList } from './components';
import { type Question } from './types/question';
import questionsJson from './mocks/questions.json';
import './App.css';

const questions: Question[] = questionsJson as Question[];

export function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const nextQuestion = () => setCurrentQuestion(prevState => prevState + 1);
    const prevQuestion = () => setCurrentQuestion(prevState => prevState - 1);

    return (
        <>
            <h1 className='text-3xl font-bold underline'>Encuesta</h1>
            <main className='w-full p-10'>
                <QuestionsList 
                    questions={questions}
                    currentQuestion={currentQuestion}
                    nextQuestion={nextQuestion}
                    prevQuestion={prevQuestion}
                />
            </main>
        </>
    );
}
