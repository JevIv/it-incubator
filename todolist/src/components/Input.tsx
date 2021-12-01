import React, {ChangeEvent, KeyboardEvent} from 'react';

type propsType={
    value:string
    onChange:()=>void
    onKeyPress:()=>void
}

export const Input = (props:propsType) => {
    const onChangeHandler = () =>{
        props.onChange()
    }
    const onKeyPressHandler = () =>{
        props.onKeyPress()
    }
    return (
        <button onChange={onChangeHandler} onKeyPress={onKeyPressHandler}>{props.value}</button>
    )
}