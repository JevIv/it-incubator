import React from "react";
import {filterType, TaskType} from "./App";


type PropsType = { //object
    title: string
    tasks: Array<TaskType>
    removeTask:(mId:number)=>void //funkcija ni4ego ne vozvra6aet- bez return eto void
    setFilter: (value: filterType)=>void
}

function ToDoList(props: PropsType) { // prinemaet object
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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