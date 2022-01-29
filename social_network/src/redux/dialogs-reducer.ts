import {RootStateType} from "./state";

export type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type DialogsRecuderActionType = UpdateNewMessageBodyActionType | SendMessageActionType

let initialState = {
    messages: [
        {id: 1, message: "HI"},
        {id: 2, message: "How is your it-incubator!"},
        {id: 3, message: "Yo-Yo-Yo"},
        {id: 4, message: "All great"},
        {id: 5, message: "I am having fun"},
        {id: 6, message: "What up?"},
    ],
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Valera"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Sveta"},
        {id: 6, name: "Alex"},
    ],
    newMessageBody: ""
};

export const dialogsReducer = (state = initialState<RootStateType>, action: DialogsRecuderActionType) => {

    let stateCopy;

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            };
            //stateCopy.newMessageBody = action.body;
            //return stateCopy
        case "SEND-MESSAGE":
            const body = state.newMessageBody;
            return {
                ...state,
                newMessageBody = "",
                messages = [...state.messages, {id: 7, message: body}],
            };

            //stateCopy.newMessageBody = "";
            //stateCopy.messages.push({id: 7, message: body});
            //return stateCopy
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

