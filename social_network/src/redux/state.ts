import {AddPostActionType, profileReducer, UpdateNewPostActionType} from "./profile-reducer";
import {dialogsReducer, SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type PostType = {
    id: number
    post: string
    likesCount: number
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _callSubscriber: (_state: RootStateType) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    AddPostActionType
    | UpdateNewPostActionType
    | SendMessageActionType
    | UpdateNewMessageBodyActionType

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "My first post", likesCount: 12},
                {id: 2, post: "My second post", likesCount: 10},
                {id: 3, post: "My third post", likesCount: 1},
                {id: 4, post: "My fourth post", likesCount: 15},
                {id: 5, post: "My fifth post", likesCount: 0},
                {id: 6, post: "My sixth post", likesCount: 5},
            ],
            newPostText: "it-kamasutra",
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
        }
    }




//window.store = store;
export default store;

