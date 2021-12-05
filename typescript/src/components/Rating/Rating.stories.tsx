import React, {useState} from 'react';
import {Rating} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingProps = {
    value: RatingValueType
    onClick: (value: RatingValueType)=> void
}

export const EmptyRating = (props: RatingProps) => <Rating value={0} onClick={x=>x}/>;
export const Rating1 = (props: RatingProps) => <Rating value={0} onClick={x=>x}/>;
export const Rating2 = (props: RatingProps) => <Rating value={0} onClick={x=>x}/>;
export const Rating3 = (props: RatingProps) => <Rating value={0} onClick={x=>x}/>;
export const Rating4 = (props: RatingProps) => <Rating value={0} onClick={x=>x}/>;
export const Rating5 = (props: RatingProps) => <Rating value={0} onClick={x=>x}/>;
export const RatingChanging = (props: RatingProps) => {
    const [rating, setRating] = useState<RatingValueType>(5);
    return (
        <Rating value={rating} onClick={setRating}/>
        )
};