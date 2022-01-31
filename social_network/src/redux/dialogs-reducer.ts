import {RootStateType} from "./state";

export type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type DialogsRecuderActionType = UpdateNewMessageBodyActionType | SendMessageActionType

export type InitialStateType = typeof initialState


export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

const initialState = {
    messages: [
        {id: 1, message: "HI"},
        {id: 2, message: "How is your it-incubator!"},
        {id: 3, message: "Yo-Yo-Yo"},
        {id: 4, message: "All great"},
        {id: 5, message: "I am having fun"},
        {id: 6, message: "What up?"},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Valera"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Sveta"},
        {id: 6, name: "Alex"},
    ]as Array<DialogType>,
    newMessageBody: ""
};

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsRecuderActionType) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            };
        case "SEND-MESSAGE":
            const body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 7, message: body}],
            };
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

