import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "../ToDoList.module.css";
import {Button} from "./Button";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

const AddItemForm = (props: AddItemFormPropsType) => {
    const [error, setError] = useState(true);
    const [title, setTitle] = useState("") //input vsegda string
    const addHandler = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim());
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
            addHandler();
        }
    }

    return (
        <div>
            <input className={error ? s.error : ""}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   placeholder={"Please type your text"}/>
            {/*<button onClick={addHandler}>+</button>*/}
            <Button name={"Add"} callback={addHandler}/>
            {error && <div className={s.errorMessage}>Title is required</div>}
        </div>
    );
};

export default AddItemForm;
