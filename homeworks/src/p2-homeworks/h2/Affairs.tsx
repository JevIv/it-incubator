import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
    } // need to fix
    const setHigh = () => {
    }
    const setMiddle = () => {
    }
    const setLow = () => {
    }
    const setFilterAllHandler = (value: FilterType) => {
        //props.setFilter(value)
        props.setFilter(value)
    }

    return (
        <div className={s.AffairsBlock}>

            {mappedAffairs}
            <div className={s.ButtonsBlock}>
                <button onClick={()=>setFilterAllHandler("all")}>All</button>
                <button onClick={()=>setFilterAllHandler("high")}>High</button>
                <button onClick={()=>setFilterAllHandler("middle")}>Middle</button>
                <button onClick={()=>setFilterAllHandler("low")}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
