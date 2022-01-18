import React, {ChangeEvent, useCallback} from "react";
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

export const Todolist = React.memo((props: PropsType) => {

    const dispatch = useDispatch()
    const tasks = useSelector<AppRootState, TaskType[]>(state => state.tasks[props.todoListId])

    const onAllClickHandler = useCallback((value: FilterValuesType, todoLisId: string) => {
        const action = changeTodolistFilterAC(value, todoLisId)
        dispatch(action)
    }, [props.filter, props.todoListId]);

    const removeTodoList = useCallback(() => {
        const action = removeTodolistAC(props.todoListId)
        dispatch(action)
    }, [dispatch]);

    const changeTodoListTitle = useCallback((newTitle: string) => {
        const action = changeTodolistTitleAC(newTitle, props.todoListId);
        dispatch(action)
    }, [dispatch, props.todoListId]);

    const addTask = useCallback((title: string) => {
        const action = addTaskAC(title, props.todoListId);
        dispatch(action)
    }, [props.todoListId]);

    const onChangeTitleHandler = useCallback((newTitle: string, taskID: string) => {
        const action = changeTaskTitleStatusAC(taskID, props.todoListId, newTitle);
        dispatch(action)
    }, [dispatch]);

    const checkBoxHandler = useCallback((id: string, todoLisId: string, e: ChangeEvent<HTMLInputElement>) => {
        const action = changeTaskStatusAC(id, todoLisId, e.currentTarget.checked)
        dispatch(action)
    }, [dispatch]);

    const onRemoveHandler = useCallback((id: string, todoLisId: string) => {
        const action = removeTaskAC(id, todoLisId)
        dispatch(action)
    }, [dispatch]);

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
                    tasksForTodolist.map(t => <Task
                        key={t.id}
                        task={t}
                        todoListId={props.todoListId}
                        checkBoxHandler={checkBoxHandler}
                        onChangeTitleHandler={onChangeTitleHandler}
                        onRemoveHandler={onRemoveHandler}
                    />)
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
});

type TaskPropsType = {
    task: TaskType
    todoListId: string
    checkBoxHandler: (id: string, todoListId: string, e: ChangeEvent<HTMLInputElement>) => void
    onChangeTitleHandler: (newTitle: string, taskID: string) => void
    onRemoveHandler: (id: string, todoListId: string) => void

}

const Task = React.memo((props: TaskPropsType) => {
    return (
        <li key={props.task.id} className={props.task.isDone ? s.isDone : ""}>
            <input type="checkbox"
                   checked={props.task.isDone}
                   onChange={(e) => props.checkBoxHandler(props.task.id, props.todoListId, e)}/>
            <EditableSpan title={props.task.title}
                          onChange={props.onChangeTitleHandler}
                          taskID={props.task.id}/>
            <button onClick={() =>
                props.onRemoveHandler(props.task.id, props.todoListId)}>X
            </button>
        </li>
    )
});

