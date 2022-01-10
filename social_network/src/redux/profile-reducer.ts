import {PostType, RootStateType} from "./state";


export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    postMessage: string
}
export type ProfileRecuderActionType = AddPostActionType | UpdateNewPostActionType

let initialState = {
    posts: [
        {id: 1, post: "My first post", likesCount: 12},
        {id: 2, post: "My second post", likesCount: 10},
        {id: 3, post: "My third post", likesCount: 1},
        {id: 4, post: "My fourth post", likesCount: 15},
        {id: 5, post: "My fifth post", likesCount: 0},
        {id: 6, post: "My sixth post", likesCount: 5},
    ],
    newPostText: "it-kamasutra",
};

export const profileReducer = (state = initialState<RootStateType>, action: ProfileRecuderActionType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                post: state.profilePage.newPostText,
                //post: state.newPostText,
                likesCount: 0
            }

            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = "";
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.profilePage.newPostText = action.postMessage;
            return state
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const updateNewPostAC = (text: string) : UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        postMessage: text
    } as const
}
