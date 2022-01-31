import React from "react";
import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    newMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch): MapDispatchPropsType => {
    return {
        newMessageBody: (body: string) => {dispatch(updateNewMessageBodyAC(body))},
        sendMessage: () => {dispatch(sendMessageAC())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;