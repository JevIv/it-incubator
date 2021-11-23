import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {filterType, TaskType} from "./App";


type PropsType = { //object
    title: string
    //tasks: Array<TaskType>
    removeTask: (mId: string) => void //funkcija ni4ego ne vozvra6aet- bez return eto void
    //setFilter: (value: filterType) => void
    addTask: (title: string) => void
    tasksArray: Array<TaskType>
}

function ToDoList(props: PropsType) { // prinemaet object
    console.log(props.tasksArray)
    console.log("second")

    const [filter, setMyFilter] = useState<filterType>("All")

    const setFilter = (value: filterType) => {
        setMyFilter(value)
        console.log(filter)
    }

    let newTask = props.tasksArray;
    newTask = filter === "All" ? props.tasksArray : //if all return all tasks
        filter === "Active" ? props.tasksArray.filter((f => !f.isDone)) : //if active return undone
            filter === "Completed" ? props.tasksArray.filter((f => f.isDone)) : //if completed return isDona
                props.tasksArray

    const [title, setTitle] = useState("") //input vsegda string

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle("")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTaskHandler();
        }
    }

    const changeFilterAllHandler = (value: filterType) => {
        //props.setFilter(value)
        setFilter(value)
    }

    const removeTaskHandler = (mID: string) => {
        props.removeTask(mID)
    }

    console.log(title)
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {/*{props.tasks.map(m => {*/}
                {newTask.map(m => {
                    return (                    // <=== skobki eto vizov
                        <li key={m.id}>
                            <button onClick={()=>removeTaskHandler(m.id)}>X</button>
                            <input type="checkbox"
                                   checked={m.isDone}/>
                            <span>{m.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>changeFilterAllHandler("All")}>All</button>
                <button onClick={()=>changeFilterAllHandler("Active")}>Active</button>
                <button onClick={()=>changeFilterAllHandler("Completed")}>Completed</button>
            </div>
        </div>
    )
}

export default ToDoList;