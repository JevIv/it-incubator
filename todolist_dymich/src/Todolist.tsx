import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import s from "./Todolist.module.css"
import {AddItemForm} from "./AddItemForm";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todoListId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeStatus: (taskId: string, value: boolean, todolistId: string) => void
    filter: FilterValuesType
    removeTodoList: (todolistId: string)=> void
}

export function Todolist(props: PropsType) {

    const onAllClickHandler = (value: FilterValuesType, todoLisId: string) => {
        props.changeFilter(value, todoLisId)}
    const onRemoveHandler = (id: string, todoLisId:string) => {
        props.removeTask(id, todoLisId)}
    const checkBoxHandler = (id: string, e: ChangeEvent<HTMLInputElement>, todoLisId: string) => {
        props.changeStatus(id, e.currentTarget.checked, todoLisId);}
    const removeTodoList = () => {
        props.removeTodoList(props.todoListId);}

    const addTask = (title: string) => {
        props.addTask(title, props.todoListId)
    }
    return (
        <div>
            <h3>
                {props.title}
                <button onClick={removeTodoList}>X</button>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {
                    props.tasks.map(t =>
                        <li key={t.id} className={t.isDone ? s.isDone : ""}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onChange={(e) => checkBoxHandler(t.id, e, props.todoListId)}/>
                            <span>{t.title}</span>
                            <button onClick={() =>
                                onRemoveHandler(t.id, props.todoListId)}>X
                            </button>
                        </li>)
                }
            </ul>
            <div>
                <button className={props.filter === "all" ? s.activeFilter : ""}
                        onClick={() => {
                            onAllClickHandler("all", props.todoListId)
                        }}>All
                </button>
                <button className={props.filter === "active" ? s.activeFilter : ""}
                        onClick={() => {
                            onAllClickHandler("active", props.todoListId)
                        }}>Active
                </button>
                <button className={props.filter === "completed" ? s.activeFilter : ""}
                        onClick={() => {
                            onAllClickHandler("completed", props.todoListId)
                        }}>Completed
                </button>
            </div>
        </div>
    )
}

