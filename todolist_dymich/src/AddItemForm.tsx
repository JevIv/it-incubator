import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Todolist.module.css";

type AddItemFormPropsType = {
    addTask: (title: string, todoListId: string) => void
    todoListId: string
}

export function AddItemForm(props: AddItemFormPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<String | null>(null);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.ctrlKey && e.charCode === 13) { //Enter
            props.addTask(newTaskTitle, props.todoListId);
            setNewTaskTitle("");
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle.trim(), props.todoListId);
            setNewTaskTitle("");
        } else {
            setError("Field is required")
        }
    }

    return (
        <div>
            <input className={error ? s.error : ""}
                   value={newTaskTitle}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    )
}