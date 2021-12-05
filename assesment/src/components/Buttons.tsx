import React from 'react';
import s from "./Buttons.module.css";
import Button from "./Button";

type PropsType = {
    number: number,
    setNumber: (number: number) => void
}

function Buttons(props: PropsType) {

    const onClickPlusHandler = (value: number) => {
        if (value < 5) {
            return props.setNumber(value + 1);
        }
    };
    const onClickResetHandler = () => {
        return props.setNumber(0);
    };

    return (
        <div className={s.buttonBlock}>
{/*            <button className={props.number === 5 ? s.buttonDisabled : s.button}
                    onClick={() => onClickPlusHandler(props.number)}
                    //onClick={() => props.setNumber(props.number + 1)}
                    disabled={props.number === 5}>inc
            </button>

            <button className={props.number === 0 ? s.buttonDisabled : s.button}
                    onClick={onClickResetHandler}
                    //onClick={() => props.setNumber(0)}
                    disabled={props.number === 0}>reset
            </button>*/}
            <Button name={"inc"}
                    callback={() => onClickPlusHandler(props.number)}
                    className={props.number === 5 ? s.buttonDisabled : s.button}
                    disabled={props.number === 5}/>
            <Button name={"reset"}
                    callback={onClickResetHandler}
                    className={props.number === 0 ? s.buttonDisabled : s.button}
                    disabled={props.number === 0}/>
        </div>

    );
}

export default Buttons;
