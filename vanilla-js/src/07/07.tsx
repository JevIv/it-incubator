import {useState} from "react";


export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimychState(m: string) {
    return [m, function(){}]

}

export const MAnComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    //const {title, man} = props;
    //const {name} = props.man;

    const [message, useMessage] = useDimychState("hello")
    return <div>
        <h1>
            {title}
            <hr/>
            <div>
                {man.name}
                {props.car.model}
            </div>
        </h1>
    </div>
}