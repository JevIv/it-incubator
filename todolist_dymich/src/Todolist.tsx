import React, {ChangeEvent, KeyboardEvent, MouseEventHandler, useState} from "react";
import {FilterValuesType} from "./App";
import s from "./Todolist.module.css"

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeStatus: (taskId: string, value: boolean, todolistId: string) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<String | null>(null);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.ctrlKey && e.charCode === 13) { //Enter
            props.addTask(newTaskTitle, props.id);
            setNewTaskTitle("");
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle.trim(), props.id);
            setNewTaskTitle("");
        } else {
            setError("Field is required")
        }
    }
    const onAllClickHandler = (value: FilterValuesType, id: string) => {
        props.changeFilter(value, id)
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
                <input className={error ? s.error : ""}
                       value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>
                {error && <div className={s.errorMessage}>{error}</div>}
            </div>
            <ul>
                {
                    props.tasks.map(t =>
                        <li key={t.id} className={t.isDone ? s.isDone : ""}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onChange={(e) => checkBoxHandler(t.id, e)}/>
                            <span>{t.title}</span>
                            <button onClick={() =>
                                onRemoveHandler(t.id)}>X
                            </button>
                        </li>)
                }
            </ul>
            <div>
                <button className={props.filter === "all" ? s.activeFilter : ""}
                        onClick={() => {
                            onAllClickHandler("all", props.id)
                        }}>All
                </button>
                <button className={props.filter === "active" ? s.activeFilter : ""}
                        onClick={() => {
                            onAllClickHandler("active", props.id)
                        }}>Active
                </button>
                <button className={props.filter === "completed" ? s.activeFilter : ""}
                        onClick={() => {
                            onAllClickHandler("completed", props.id)
                        }}>Completed
                </button>
            </div>
        </div>
    )
}