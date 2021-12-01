import React, {ChangeEvent, KeyboardEvent, MouseEventHandler, useState} from "react";
import {FilterValuesType} from "./App";
import s from "./Todolist.module.css"

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus:(taskId: string, value: boolean) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.charCode === 13) { //Enter
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle("");
        }
    }
    const onAllClickHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }
    const onRemoveHandler = (id: string) => {
        props.removeTask(id)
    }
    const checkBoxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(id, e.currentTarget.checked);
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input className={s.error}
                    value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t =>
                        <li key={t.id}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onChange={(e)=>checkBoxHandler(t.id, e)}/>
                            <span>{t.title}</span>
                            <button onClick={() =>
                                onRemoveHandler(t.id)}>X
                            </button>
                        </li>)
                }
            </ul>
            <div>
                <button
                    onClick={() => {
                        onAllClickHandler("all")
                    }}>All
                </button>
                <button onClick={() => {
                    onAllClickHandler("active")
                }}>Active
                </button>
                <button onClick={() => {
                    onAllClickHandler("completed")
                }}>Completed
                </button>
            </div>
        </div>
    )
}