import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import s from "./Todolist.module.css"
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

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
    changeTaskTitle: (newTitle: string, taskId: string, todolistId: string) => void
    filter: FilterValuesType
    removeTodoList: (todolistId: string)=> void
    changeTodoListTitle: (todolistId: string, newTitle: string)=> void
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
    const changeTodoListTitle = (newTitle: string) => {
        props.changeTodoListTitle(props.todoListId, newTitle);}
    const addTask = (title: string) => {
        props.addTask(title, props.todoListId)}
    const onChangeTitleHandler = (newTitle: string, taskID: string) => {
        props.changeTaskTitle( newTitle, taskID, props.todoListId);}

    return (
        <div>
            <h3>
                <EditableSpan taskID={props.todoListId} title={props.title} onChange={changeTodoListTitle} />
                <IconButton onClick={removeTodoList}>
                    <Delete />
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {
                    props.tasks.map(t =>
                        <li key={t.id} className={t.isDone ? s.isDone : ""}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onChange={(e) => checkBoxHandler(t.id, e, props.todoListId)}/>
                            <EditableSpan title={t.title}
                                          onChange={onChangeTitleHandler}
                                          taskID={t.id}/>
                            <IconButton onClick={() =>
                                onRemoveHandler(t.id, props.todoListId)}>
                                <Delete />
                            </IconButton>
                        </li>)
                }
            </ul>
            <div>
                <Button variant={props.filter === "all" ? "contained" : "text"}
                        onClick={() => {
                            onAllClickHandler("all", props.todoListId)
                        }}>All
                </Button>
                <Button variant={props.filter === "active" ? "contained" : "text"} color={"primary"}
                        onClick={() => {
                            onAllClickHandler("active", props.todoListId)
                        }}>Active
                </Button>
                <Button variant={props.filter === "completed" ? "contained" : "text"} color={"secondary"}
                        onClick={() => {
                            onAllClickHandler("completed", props.todoListId)
                        }}>Completed
                </Button>
            </div>
        </div>
    )
}

