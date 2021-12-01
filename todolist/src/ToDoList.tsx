import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {filterType, TaskType} from "./App";
import {Button} from "./components/Button";
import s from "./ToDoList.module.css"

type PropsType = { //object
    title: string
    //tasks: Array<TaskType>
    removeTask: (mId: string) => void //funkcija ni4ego ne vozvra6aet- bez return eto void
    //setFilter: (value: filterType) => void
    addTask: (title: string) => void
    tasksArray: Array<TaskType>
    changeStatus: (id: string, value: boolean) => void
}

function ToDoList(props: PropsType) { // prinemaet object
    console.log(props.tasksArray)
    console.log("second")

    const [filter, setMyFilter] = useState<filterType>("All")
    const [error, setError] = useState(true)
    const setFilter = (value: filterType) => {
        setMyFilter(value)
    }

    let newTask: Array<TaskType>;
    newTask = filter === "All" ? props.tasksArray : //if all return all tasks
        filter === "Active" ? props.tasksArray.filter((f => !f.isDone)) : //if active return undone
            filter === "Completed" ? props.tasksArray.filter((f => f.isDone)) : //if completed return isDona
                props.tasksArray

    const [title, setTitle] = useState("") //input vsegda string
    const addTaskHandler = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim());
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
    const changeFilterAllHandler = (value: filterType) => {
        //props.setFilter(value)
        setFilter(value)
    }
    const removeTaskHandler = (mID: string) => {
        props.removeTask(mID)
    }
    const checkBoxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(id, e.currentTarget.checked);}
    return (
        <div>
            <h3>{props.title}</h3>
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
                {newTask.map(m => {
                    /*const checkBoxHandler = (event: ChangeEvent<HTMLInputElement>) => {
                        props.changeStatus(m.id, event.currentTarget.checked);
                    }*/
                    return (                    // <=== skobki eto vizov
                        <li key={m.id}>
                            {/*<button onClick={()=>removeTaskHandler(m.id)}>X</button>*/}
                            <Button name={"X"} callback={() => removeTaskHandler(m.id)}/>
                            <input type="checkbox"
                                   checked={m.isDone}
                                   /*onChange={checkBoxHandler}/>*/
                                   onChange={(event) => checkBoxHandler(m.id, event)}/>
                            <span className={m.isDone ? s.isDone : ""}>{m.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={filter==="All" ? s.activeFilter : ""} onClick={()=>changeFilterAllHandler("All")}>All</button>
                <button className={filter==="Active" ? s.activeFilter : ""} onClick={()=>changeFilterAllHandler("Active")}>Active</button>
                <button className={filter==="Completed" ? s.activeFilter : ""} onClick={()=>changeFilterAllHandler("Completed")}>Completed</button>
{/*<Button name={"All"} callback={() => changeFilterAllHandler("All")}/>
                <Button name={"Active"} callback={() => changeFilterAllHandler("Active")}/>
                <Button name={"Completed"} callback={() => changeFilterAllHandler("Completed")}/>*/}
            </div>
        </div>
    )
}

export default ToDoList;