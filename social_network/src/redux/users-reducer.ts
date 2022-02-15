export type UsersRecuderActionType =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching>

export type UserType = {
    id: number
    name: string
    status: string
    location: UserLocation
    photos: PhotoType
    followed: boolean

}

type PhotoType = {
    small: string | null
    large: string | null
}

type UserLocation = {
    city: string
    country: string
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export const PHOTO_URL = "https://cdn5.vectorstock.com/i/1000x1000/89/79/funny-avatar-cunning-emoji-flat-vector-27638979.jpg"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
            return {...state, users: [...action.users]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.curentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state

    }
}

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users
    } as const
}
export const setCurrentPage = (curentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        curentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        totalUsersCount: totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
