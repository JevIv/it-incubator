import React from "react";
import s from "./../Dialogs.module.css";
import {RootStateType} from "../../../redux/state";

const Message = (props: RootStateType) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;