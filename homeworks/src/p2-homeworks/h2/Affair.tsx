import React from 'react'
import s from "./Affairs.module.css";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.Affair}>
            <span>// show some text//</span>
            <span>{props.affair.priority}</span>

            <button className={s.ButtonDelete} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
