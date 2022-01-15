import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./AppWithRedux";
import s from "./Todolist.module.css"
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";
import {changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleStatusAC, removeTaskAC} from "./state/tasks-reducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todoListId: string
    title: string
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const dispatch = useDispatch()
    const tasks = useSelector<AppRootState, TaskType[]>(state => state.tasks[props.todoListId])

    const onAllClickHandler = (value: FilterValuesType, todoLisId: string) => {
        const action = changeTodolistFilterAC(value, todoLisId)
        dispatch(action)
    }
    const onRemoveHandler = (id: string, todoLisId: string) => {
        const action = removeTaskAC(id, todoLisId)
        dispatch(action)
    }
    const checkBoxHandler = (id: string, e: ChangeEvent<HTMLInputElement>, todoLisId: string) => {
        const action = changeTaskStatusAC(id, todoLisId, e.currentTarget.checked)
        dispatch(action)
    }
    const removeTodoList = () => {
        const action = removeTodolistAC(props.todoListId)
        dispatch(action)
    }
    const changeTodoListTitle = (newTitle: string) => {
        const action = changeTodolistTitleAC(newTitle, props.todoListId);
        dispatch(action)
    }
    const addTask = (title: string) => {
        const action = addTaskAC(title, props.todoListId);
        dispatch(action)
    }
    const onChangeTitleHandler = (newTitle: string, taskID: string) => {
        const action = changeTaskTitleStatusAC(taskID, props.todoListId, newTitle);
        dispatch(action)
    }

    let tasksForTodolist = tasks;
    if (props.filter === "completed") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
    }
    if (props.filter === "active") {
        tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
    }

    return (
        <div>
            <h3>
                <EditableSpan taskID={props.todoListId} title={props.title} onChange={changeTodoListTitle}/>
                <button onClick={removeTodoList}>X</button>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {
                    tasksForTodolist.map(t =>
                        <li key={t.id} className={t.isDone ? s.isDone : ""}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onChange={(e) => checkBoxHandler(t.id, e, props.todoListId)}/>
                            <EditableSpan title={t.title}
                                          onChange={onChangeTitleHandler}
                                          taskID={t.id}/>
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

