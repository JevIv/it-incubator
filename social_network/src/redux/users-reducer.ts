import {PostType, RootStateType} from "./state";


export type UsersRecuderActionType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

export type UserType = {
    id: number
    fullName: string
    status: string
    location: UserLocation
    photoUrl: string
    followed: boolean
}

export type InitialStateType = {
    users: Array<UserType>
}

export const PHOTO_URL = "https://cdn5.vectorstock.com/i/1000x1000/89/79/funny-avatar-cunning-emoji-flat-vector-27638979.jpg"

let initialState = {
    users: [],
};

export const usersReducer = (state: InitialStateType = initialState, action: UsersRecuderActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}
