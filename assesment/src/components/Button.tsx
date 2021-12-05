
import React from 'react';

type PropsType = {
    name: string
    callback: ()=> void
    className: string
    disabled: boolean
}

function Button(props: PropsType) {

    return <button
        onClick={props.callback}
        className={props.className}
        disabled={props.disabled}>{props.name}</button>;
}

export default Button;
