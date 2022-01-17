import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Todolist.module.css";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<String | null>(null);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (error !== null) {
            setError(null);
        }
        //if (e.ctrlKey && e.charCode === 13) { //Enter
        if (e.key === "Enter") {
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
            <button onClick={addTaskHandler}>+</button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    )
} );