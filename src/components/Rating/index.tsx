import { useEffect, useState } from "react";
import { Question } from "../../types/question";

interface Props {
    rating: Question['rating']
    setRating: (rating: Question['rating']) => void
}

export function Rating({ rating, setRating }: Props) {
    const [hoverRating, setHoverRating] = useState<Question['rating']>(rating);

    const handlerOnClickSetRating = (rating: Question['rating']) => () => setRating(rating);
    const handlerOnMouseOverRating = (hoverRating: Question['rating']) => () => setHoverRating(hoverRating);
    const handlerMouseLeaveRating = (hoverRating: Question['rating']) => () => setHoverRating(hoverRating);

    useEffect(() => {
        setHoverRating(0);
    }, [rating]);

    return (
        <p 
            className='text-3xl'
            onMouseLeave={handlerMouseLeaveRating(rating)}
        >
            {"★"
                .repeat(hoverRating || rating)
                .padEnd(5, "☆")
                .split('')
                .map((elem, index) => 
                    <span 
                        key={index}
                        className='cursor-pointer'
                        onMouseOver={handlerOnMouseOverRating((index + 1) as Question['rating'])}
                        onClick={handlerOnClickSetRating((index + 1) as Question['rating'])}
                    >
                        {elem}
                    </span>
                )
            }
        </p>
    );
}
