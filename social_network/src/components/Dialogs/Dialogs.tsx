import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}


let dialogData = [
    {id:1, name:"Dimych"},
    {id:2, name:"Andrey"},
    {id:3, name:"Valera"},
    {id:4, name:"Sasha"},
    {id:5, name:"Sveta"},
    {id:6, name:"Alex"},
]

let messageData = [
    {id:1, message:"HI"},
    {id:2, message:"How is your it-incubator!"},
    {id:3, message:"Yo-Yo-Yo"},
    {id:4, message:"All great"},
    {id:5, message:"I am having fun"},
    {id:6, message:"What up?"},
]

let dialogsElements = dialogData
    .map(d => <DialogItem name={d.name} id={d.id}/>)

let messageElements = messageData
    .map(m => <Message message={m.message} id={m.id}/>)


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;