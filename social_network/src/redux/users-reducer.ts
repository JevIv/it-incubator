import {PostType, RootStateType} from "./state";


export type AddPostActionType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

export type UsersRecuderActionType = AddPostActionType

let initialState = {
    users: [
        {
            id: 1,
            fullName: "My first post",
            status: "I am a boss",
            location: {city: "Minsk", country: "Belarus"},
            followed: true
        },
        {
            id: 2,
            fullName: "Olya",
            status: "Happy",
            location: {city: "Falesti", country: "Moldova"},
            followed: false
        },
        {
            id: 3,
            fullName: "Evgeny",
            status: "Busy person",
            location: {city: "Liepaja", country: "Latvia"},
            followed: true
        },
        {
            id: 4,
            fullName: "Sam",
            status: "I am a strong man",
            location: {city: "Ipswich", country: "United Kingdom"},
            followed: false
        },
        {
            id: 5,
            fullName: "Bob",
            status: "Nothing special",
            location: {city: "London", country: "United Kingdom"},
            followed: false
        },
        {
            id: 6,
            fullName: "Jacob",
            status: "Alright",
            location: {city: "Colchester", country: "United Kingdom"},
            followed: true
        },
    ],
};

export const usersReducer = (state = initialState < RootStateType >, action: UsersRecuderActionType) => {
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
export const setUsersAC = (users: any) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}
