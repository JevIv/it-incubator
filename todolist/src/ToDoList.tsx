import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {filterType, TaskType, TodoListType} from "./App";
import {Button} from "./components/Button";
import s from "./ToDoList.module.css"

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
}

function ToDoList(props: PropsType) { // prinemaet object
    console.log(props.tasksArray)
    console.log("second")

    /*const [filter, setMyFilter] = useState<filterType>("All");
    const setFilter = (value: filterType) => {
        setMyFilter(value)
    }*/
    const [error, setError] = useState(true);
    const [title, setTitle] = useState("") //input vsegda string
    const addTaskHandler = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim(), props.id);
            setTitle("");
        } else {
            setError(true);
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
        setError(false);

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTaskHandler();
        }
    }
    const changeFilterAllHandler = (value: filterType, todoListID: string) => {
        //props.setFilter(value)
        //setFilter(value)
        const updatedTodoLists = props.todoLists.map(tl => tl.id === todoListID ? {...tl, filter: value} : tl)
        props.setTodoLists(updatedTodoLists);
        //setFilter(value);
    }
    const removeTaskHandler = (mID: string, todoListID: string) => {
        props.removeTask(mID, todoListID)
    }
    const checkBoxHandler = (id: string, e: ChangeEvent<HTMLInputElement>, todoListID:string) => {
        props.changeTaskStatus(id, e.currentTarget.checked, todoListID);
    }
    return (
        <div>
            <h3>
                {props.title}
                <button

                    onClick={() => {props.removeTodoList(props.id)}}>X
                </button>
            </h3>
            <div>
                {/*<Input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>*/}
                <input className={error ? s.error : ""}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                {/*<button onClick={addTaskHandler}>+</button>*/}
                <Button name={"+"} callback={addTaskHandler}/>
                {error && <div className={s.errorMessage}>Title is required</div>}
            </div>
            <ul>
                {/*{props.tasks.map(m => {*/}
                {props.tasksArray.map(m => {
                    /*const checkBoxHandler = (event: ChangeEvent<HTMLInputElement>) => {
                        props.changeStatus(m.id, event.currentTarget.checked);
                    }*/
                    return (                    // <=== skobki eto vizov
                        <li key={m.id}>
                            {/*<button onClick={()=>removeTaskHandler(m.id)}>X</button>*/}
                            <Button name={"X"} callback={() => removeTaskHandler(m.id, props.id)}/>
                            <input type="checkbox"
                                   checked={m.isDone}
                                   /*onChange={checkBoxHandler}/>*/
                                   onChange={(event) => checkBoxHandler(m.id, event, props.id)}/>
                            <span className={m.isDone ? s.isDone : ""}>{m.title}</span>
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