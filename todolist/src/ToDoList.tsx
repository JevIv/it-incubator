import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {filterType, TaskType, TodoListType} from "./App";
import {Button} from "./components/Button";
import s from "./ToDoList.module.css"
import AddItemForm from "./components/AddItemForm";
import EditableSpan from "./components/EditableSpan";

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
    setTodoLists: (array: Array<TodoListType>)=> void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (id: string, title: string, todoListID: string) => void
    changeTodoListTitle: (title: string, todoListID: string) => void
}

function ToDoList(props: PropsType) { // prinemaet object

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    const changeFilterAllHandler = (value: filterType, todoListID: string) => {
        const updatedTodoLists = props.todoLists.map(tl => tl.id === todoListID ? {...tl, filter: value} : tl)
        props.setTodoLists(updatedTodoLists);
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
    return (
        <div>
            <h3>
                {/*{props.title}*/}
                <EditableSpan title={props.title}  changeTitle={changeTodoListTitle}/>
                <button
                    onClick={() => {props.removeTodoList(props.id)}}>X
                </button>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {props.tasksArray.map(m => {

                    const changeTaskTitle = (newTitle: string) => {
                        props.changeTaskTitle(m.id, newTitle, props.id)
                    }
                    return (                    // <=== skobki eto vizov
                        <li key={m.id}>
                            {/*<button onClick={()=>removeTaskHandler(m.id)}>X</button>*/}
                            <Button name={"X"} callback={() => removeTaskHandler(m.id, props.id)}/>
                            <input type="checkbox"
                                   checked={m.isDone}
                                   /*onChange={checkBoxHandler}/>*/
                                   onChange={(event) => checkBoxHandler(m.id, event, props.id)}/>
                            {/*<span className={m.isDone ? s.isDone : ""}>{m.title}</span>*/}
                            <EditableSpan title={m.title}
                                          //isDone={m.isDone}
                                          changeTitle={changeTaskTitle}/>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={props.filter==="All" ? s.activeFilter : ""}
                        onClick={()=>changeFilterAllHandler("All", props.id)}>All</button>
                <button className={props.filter==="Active" ? s.activeFilter : ""}
                        onClick={()=>changeFilterAllHandler("Active", props.id)}>Active</button>
                <button className={props.filter==="Completed" ? s.activeFilter : ""}
                        onClick={()=>changeFilterAllHandler("Completed", props.id)}>Completed</button>
                {/*<Buttons name={"All"} callback={() => changeFilterAllHandler("All")}/>
                <Buttons name={"Active"} callback={() => changeFilterAllHandler("Active")}/>
                <Buttons name={"Completed"} callback={() => changeFilterAllHandler("Completed")}/>*/}
            </div>
        </div>
    )
}

export default ToDoList;