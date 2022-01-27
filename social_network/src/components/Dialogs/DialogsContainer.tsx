import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsPropsType = {
    store: StoreType
    newMessageBody: string
}

const DialogsContainer = (props: DialogsPropsType) => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageAC());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyAC(body));
                }

                return (
                    <Dialogs sendMessage={onSendMessageClick} dialogsPage={state} newMessageBody={onNewMessageChange}/>
                )
            }}
    </StoreContext.Consumer>;
}

export default DialogsContainer;