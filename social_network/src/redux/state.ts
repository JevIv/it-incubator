

export type PostType = {
    id: number
    post: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, post: "My first post", likesCount: 12},
            {id: 2, post: "My second post", likesCount: 10},
            {id: 3, post: "My third post", likesCount: 1},
            {id: 4, post: "My fourth post", likesCount: 15},
            {id: 5, post: "My fifth post", likesCount: 0},
            {id: 6, post: "My sixth post", likesCount: 5},
        ]
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
    },
    sidebar: {}
}

export default state
