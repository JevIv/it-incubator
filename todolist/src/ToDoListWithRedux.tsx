import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {filterType, TaskType, TodoListType} from "./AppWithReducers";
import {ButtonComponent} from "./components/ButtonComponent";
import s from "./ToDoList.module.css"
import AddItemForm from "./components/AddItemForm";
import EditableSpan from "./components/EditableSpan";
import {Button, ButtonGroup, Checkbox, List, ListItem} from "@material-ui/core";
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import {ChangeTodolistFilterAC} from "./state/todolist-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {TaskStateType} from "./AppWithRedux";
import {addTaskAC} from "./state/tasks-reducer";

type PropsType = { //object
    key: string,
    id: string,
    title: string
    filter: filterType
    //tasks: Array<TaskType>
    //setFilter: (value: filterType) => void
    removeTask: (mId: string, todoListID: string) => void //funkcija ni4ego ne vozvra6aet- bez return eto void
    addTask: (title: string, todoListID: string) => void
    tasksArray: Array<TaskType>
    changeTaskStatus: (id: string, value: boolean, todoListID: string) => void
    todoLists: Array<TodoListType>
    //setTodoLists: (array: Array<TodoListType>)=> void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (id: string, todoListID: string, title: string) => void
    changeTodoListTitle: (title: string, todoListID: string) => void
}

function ToDoList(props: PropsType) { // prinemaet object

    const todoList = useSelector<AppRootStateType, TodoListType>((state) => state.todolists
        .filter(todo => todo.id === props.id)[0])
    const tasks = useSelector<AppRootStateType, Array<TaskType>>((state) => state.tasks[props.id])
    const dispatch = useDispatch()

    const addTask = (title: string) => {
        let action = addTaskAC(title, props.id)
        dispatch(action)
    }
    const changeFilterAllHandler = (value: filterType, todoListID: string) => {
        const action = ChangeTodolistFilterAC(value,todoListID)
        dispatch(action)
    }
    const removeTaskHandler = (mID: string, todoListID: string) => {
        props.removeTask(mID, todoListID)
    }
    const checkBoxHandler = (id: string, e: ChangeEvent<HTMLInputElement>, todoListID:string) => {
        props.changeTaskStatus(id, e.currentTarget.checked, todoListID);
    }
    const changeTodoListTitle = (newTitle: string) => {
        props.changeTodoListTitle(newTitle, props.id); //vazna posledovateljnostj props vazna
    }

    const todoListComponents = todoLists.map(tl => {
        let newTask = tl.filter === "All" ? tasks[tl.id] : //if all return all tasks
            tl.filter === "Active" ? tasks[tl.id].filter((f => !f.isDone)) : //if active return undone
                tl.filter === "Completed" ? tasks[tl.id].filter((f => f.isDone)) : //if completed return isDona
                    tasks[tl.id]

    return (
        <div>
            <h3>
                {/*{props.title}*/}
                <EditableSpan title={props.title}  changeTitle={changeTodoListTitle}/>
                <CancelPresentationRoundedIcon
                    color={"primary"}
                    fontSize={"inherit"}
                    onClick={() => {props.removeTodoList(props.id)}}>
                </CancelPresentationRoundedIcon>
            </h3>
            <AddItemForm addItem={addTask}/>
            <List>
                {props.tasksArray.map(m => {

                    const changeTaskTitle = (newTitle: string) => {
                        props.changeTaskTitle(m.id, props.id, newTitle)
                    }
                    return (                    // <=== skobki eto vizov
                        <ListItem key={m.id}>
                            {/*<ButtonComponent name={"X"} callback={() => removeTaskHandler(m.id, props.id)}/>*/}
                            <Checkbox color={"primary"}
                                   checked={m.isDone}
                                /*onChange={checkBoxHandler}/>*/
                                   onChange={(event) => checkBoxHandler(m.id, event, props.id)}/>
                            {/*<span className={m.isDone ? s.isDone : ""}>{m.title}</span>*/}
                            <EditableSpan title={m.title}
                                //isDone={m.isDone}
                                          changeTitle={changeTaskTitle}/>
                            <ClearOutlinedIcon
                                color={"primary"}
                                fontSize={"small"}
                                onClick={() => removeTaskHandler(m.id, props.id)}>
                            </ClearOutlinedIcon>
                        </ListItem>
                    )
                })}
            </List>
            <div>
                <ButtonGroup fullWidth size="small" variant="text" aria-label="text primary button group">
                    <Button variant={props.filter === "All" ? "contained" : "text"}
                        //className={props.filter === "All" ? s.activeFilter : ""}
                            onClick={() => changeFilterAllHandler("All", props.id)}>All
                    </Button>
                    <Button color={"primary"}
                            variant={props.filter === "Active" ? "contained" : "text"}
                        //className={props.filter === "Active" ? s.activeFilter : ""}
                            onClick={() => changeFilterAllHandler("Active", props.id)}>Active
                    </Button>
                    <Button color={"secondary"}
                            variant={props.filter === "Completed" ? "contained" : "text"}
                        //className={props.filter === "Completed" ? s.activeFilter : ""}
                            onClick={() => changeFilterAllHandler("Completed", props.id)}>Completed
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default ToDoList;