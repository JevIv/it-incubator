import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: StoreType
    newMessageBody: string
}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyAC(body));
    }

    return <Dialogs sendMessage={onSendMessageClick} dialogsPage={state} newMessageBody={onNewMessageChange}/>;
}

export default DialogsContainer;