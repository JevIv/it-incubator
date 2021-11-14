import React from 'react'
import s from "./Message.module.css"
import {MessageType} from "./HW1";

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.messageBlock}>
            <img
                src={props.avatar}
                //src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
                alt=""/>
            <div className={s.message}>
                <p className={s.senderName}>{props.name}</p>
                <p className={s.text}>{props.message}</p>
                <time>{props.time}</time>
            </div>
        </div>
    )
}

export default Message
