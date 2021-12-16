import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    editMode: true
    onChange: (newValue: string) => void
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
        props.onChange(title);
    }
    const onchangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setTitle(e.currentTarget.value);


    return props.editMode
        ? <input value={title} onChange={onchangeTitleHandler} onBlur={activateViewMode} autoFocus={true}/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}

