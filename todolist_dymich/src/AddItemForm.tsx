import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Todolist.module.css";
import {Button} from "@mui/material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
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
            props.addItem(newTaskTitle);
            setNewTaskTitle("");
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim() !== "") {
            props.addItem(newTaskTitle.trim());
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
            <Button onClick={addTaskHandler} variant={"contained"} color={"primary"}>+</Button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    )
}