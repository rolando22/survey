import { Rating } from './..';
import { type Question } from '../../types/question';

interface Props {
    questions: Question[]
    currentQuestion: number
    setRating: (rating: Question['rating']) => void
    nextQuestion: () => void
    prevQuestion: () => void
}

export function QuestionsList({ questions, currentQuestion, nextQuestion, prevQuestion, setRating }: Props) {

    const handlerOnClickNextQuestion = () => nextQuestion();
    const handlerOnClickPrevQuestion = () => prevQuestion();

    return (
        <section className='w-full grid gap-8 sm:px-20 sm:py-10 px-0 py-10'>
            <article className='w-full border rounded-md p-4'>
                <h3>{questions[currentQuestion].text}</h3>
                <Rating 
                    rating={questions[currentQuestion].rating}
                    setRating={setRating}
                />
            </article>
            <div className='w-full grid gap-5'>
                <p>{currentQuestion + 1} / {questions.length}</p>
                <div className='flex justify-between'>
                    <button 
                        className={`bg-gray-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-md ${currentQuestion === 0 ? 'opacity-50 hover:bg-gray-300' : ''}`}
                        onClick={handlerOnClickPrevQuestion}
                        disabled={currentQuestion === 0}
                    >
                            Anterior
                    </button>
                    <button 
                        className={`bg-gray-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-md ${currentQuestion === questions.length - 1 ? 'opacity-50 hover:bg-gray-300' : ''}`}
                        onClick={handlerOnClickNextQuestion}
                        disabled={currentQuestion === questions.length - 1}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </section>
    );
}
