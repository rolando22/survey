import { Rating } from './..';
import { type Question } from '../../types/question';

interface Props {
    questions: Question[]
}

export function Survey({ questions }: Props) {
    return (
        <section className='w-full grid gap-8 px-20 py-10'>
            {questions.map(question => 
                <article className='flex justify-between'>
                    <h3>{question.text}</h3>
                    <Rating rating={question.rating} isReadOnly/>
                </article>
            )}
        </section>
    );
}
