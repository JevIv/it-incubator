import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "../ToDoList.module.css";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import {TextField} from "@material-ui/core";
import {ButtonComponent} from "./ButtonComponent";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    const [error, setError] = useState<String | null>(null)//(true);
    const [title, setTitle] = useState("") //input vsegda string
    const addHandler = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim());
            setTitle("");
        } /*else {
            setError(true);
        }*/
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
        //setError(false);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.key === "Enter") {
            addHandler();
        }
    }

    return (
        <div>
            <TextField //className={error ? s.error : ""}
                       error={!!error}
                       helperText={error}
                       value={title}
                       variant="outlined"
                       size={"small"}
                       label={"Type your text"}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       placeholder={"Please type your text"}/>
            {/*<AddBoxOutlinedIcon fontSize={"large"} color={"primary"} onClick={addHandler}>+</AddBoxOutlinedIcon>*/}
            <ButtonComponent name={"Add"} callback={addHandler}/>
            {/*{error && <div className={s.errorMessage}>Title is required</div>}*/}
        </div>
    );
});

export default AddItemForm;
