import {RootStateType} from "./state";

export type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type DialogsRecuderActionType = UpdateNewMessageBodyActionType | SendMessageActionType


export const dialogsReducer = (state: RootStateType, action: DialogsRecuderActionType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.dialogsPage.newMessageBody = action.body;
            return state
        case "SEND-MESSAGE":
            const body = state.dialogsPage.newMessageBody;
            state.dialogsPage.newMessageBody = "";
            state.dialogsPage.messages.push({id: 6, message: body});
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body,
    } as const
}

