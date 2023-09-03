import { type Question } from "../../types/question";

interface Props {
    questions: Question[]
    currentQuestion: number
    nextQuestion: () => void
    prevQuestion: () => void
}

export function QuestionsList({ questions, currentQuestion, nextQuestion, prevQuestion }: Props) {

    const handlerOnClickNextQuestion = () => nextQuestion();
    const handlerOnClickPrevQuestion = () => prevQuestion();

    return (
        <section className='w-full grid gap-8 px-20 py-10'>
            <article>
                <h3>{questions[currentQuestion].text}</h3>
                
            </article>
            <div className='flex gap-40 justify-between'>
                <button 
                    onClick={handlerOnClickPrevQuestion}
                    disabled={currentQuestion === 0}
                >
                        Anterior
                </button>
                <p>{currentQuestion + 1} / {questions.length}</p>
                <button 
                    onClick={handlerOnClickNextQuestion}
                    disabled={currentQuestion === questions.length - 1}
                >
                    Siguiente
                </button>
            </div>
        </section>
    );
}
