export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileType = ReturnType<typeof setUserProfile>

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    postMessage: string
}

export type ProfileRecuderActionType = AddPostActionType | UpdateNewPostActionType | SetUserProfileType

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: string
    userId: number
    photos: {
        small: null | string
        large: null | string
    }
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, post: "My first post", likesCount: 12},
        {id: 2, post: "My second post", likesCount: 10},
        {id: 3, post: "My third post", likesCount: 1},
        {id: 4, post: "My fourth post", likesCount: 15},
        {id: 5, post: "My fifth post", likesCount: 0},
        {id: 6, post: "My sixth post", likesCount: 5},
    ],
    newPostText: "it-kamasutra",
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "",
        userId: 1,
        photos: {
            small: null,
            large: null
        }
    }
};

export const profileReducer = (state: InitialStateType = initialState,
                               action: ProfileRecuderActionType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: 5,
                post: state.newPostText,
                //post: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.postMessage
            };
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            };
        }
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
export const updateNewPostAC = (text: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        postMessage: text
    } as const
}
export const setUserProfile = (profile: ProfileType)=> {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

