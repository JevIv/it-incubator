import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    taskID: string
    title: string
    onChange: (newValue: string, taskID: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState("");

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.title);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title, props.taskID);
    }
    const onchangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setTitle(e.currentTarget.value);


    return editMode
        ? <input value={title} onChange={onchangeTitleHandler} onBlur={activateViewMode} autoFocus={true}/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}

