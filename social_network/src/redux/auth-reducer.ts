export type AuthRecuderActionType =
    ReturnType<typeof setAuthUserData>

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state: InitialStateType = initialState, action: AuthRecuderActionType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state

    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: "SET_USER_DATA",
        data: {userId, email, login}
    } as const
}

