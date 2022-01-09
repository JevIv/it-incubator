import {PostType, RootStateType} from "./state";


export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    postMessage: string
}
export type ProfileRecuderActionType = AddPostActionType | UpdateNewPostActionType


export const profileReducer = (state: RootStateType, action: ProfileRecuderActionType) => {
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
