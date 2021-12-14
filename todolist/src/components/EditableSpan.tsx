import React, {ChangeEvent, useState} from 'react';
//import s from "../ToDoList.module.css"

type EditableSpanPropsType = {
    title: string
    //isDone: boolean | string
    changeTitle: (newTitle: string) => void
}

const EditableSpan = (props: EditableSpanPropsType) => {
    const [title, setTitle] = useState(props.title)
    const [editMode, setEditMode] = useState<boolean>(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    const OnEditMode = () => {
        setEditMode(true);
    }
    const OffEditMode = () => {
        setEditMode(false);
        props.changeTitle(title);
    }
    return (
        editMode
            ? <input value={title}
                     autoFocus={true}
                     onBlur={OffEditMode}
                     onChange={onChangeHandler}/>
            : <span onDoubleClick={OnEditMode}
                    //className={props.isDone ? s.isDone : ""}
            >{props.title}</span>
    );
};

export default EditableSpan;
