import React from 'react';
import s from './CounterBlock.module.css';
import Display from "./Display";
import Buttons from "./Buttons";

type PropsType = {
    number: number,
    setNumber: (number: number) => void
}

function CounterBlock(props: PropsType) {

    return (
        <div className={s.conteiner}>
            <Display number={props.number}/>
            <Buttons number={props.number}
                     setNumber={props.setNumber}/>
        </div>
    );
}

export default CounterBlock;
