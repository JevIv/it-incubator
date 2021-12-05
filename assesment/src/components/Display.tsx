import React from 'react';
import s from './Display.module.css';

type PropsType = {
    number: number,
}

function Display(props: PropsType) {
    return (
        <div className={s.numberBlock}>
            <div className={props.number === 5 ? s.numberValueRed : s.numberValue}>
                {props.number}
            </div>
        </div>
    );
}

export default Display;
