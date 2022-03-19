import React from 'react';
import style from "./Title.module.css";

type PropsType= {
    text:string
}

export const Title = (props: PropsType) => {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    );
};
