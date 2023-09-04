import { Rating } from './..';
import { type Question } from '../../types/question';

interface Props {
    questions: Question[]
}

export function Survey({ questions }: Props) {
    return (
        <section className='w-full grid content-center gap-8 sm:px-10 sm:py-10 px-4 py-4 border rounded-md'>
            {questions.map(question => 
                <article 
                    key={question.id} 
                    className='sm:flex sm:justify-between sm:items-center grid'
                >
                    <h3>{question.text}</h3>
                    <Rating rating={question.rating} isReadOnly/>
                </article>
            )}
        </section>
    );
}
