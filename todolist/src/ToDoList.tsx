import React, {ChangeEvent, useState} from "react";
import {filterType, TaskType} from "./App";


type PropsType = { //object
    title: string
    tasks: Array<TaskType>
    removeTask:(mId:string)=>void //funkcija ni4ego ne vozvra6aet- bez return eto void
    setFilter: (value: filterType)=>void
    addTask: (title: string)=>void
}

function ToDoList(props: PropsType) { // prinemaet object

    const [title, setTitle]= useState("") //input vsegda string

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle("")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    console.log(title)
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {props.tasks.map(m => {
                    return (                    // <=== skobki eto vizov
                        <li key={m.id}>
                            <button onClick={()=> props.removeTask(m.id)}>X</button>
                            <input type="checkbox"
                                   checked={m.isDone}/>
                            <span>{m.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=> props.setFilter("All")}>All</button>
                <button onClick={()=> props.setFilter("Active")}>Active</button>
                <button onClick={()=> props.setFilter("Completed")}>Completed</button>
            </div>
        </div>
    )
}

export default ToDoList;