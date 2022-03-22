import {Dispatch} from "redux";

type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

type ActionsType =
    | SetErrorActionType
    | SetStatusActionType
    | ReturnType<typeof setAppInitializedAC>

export type SetErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetStatusActionType = ReturnType<typeof setAppStatusAC>

const initialState: InitialStateType = {
    status: "idle",
    error: null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType ): InitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        case "APP/SET-IS-INITIALIZED":
            return {...state, isInitialized: action.value}
        default:
            return {...state}
    }
};

export const setAppErrorAC = (error: string | null) => ({ type:"APP/SET-ERROR", error } as const)
export const setAppStatusAC = (status: RequestStatusType) => ({ type:"APP/SET-STATUS", status } as const)
export const setAppInitializedAC = (value: boolean) => ({ type:"APP/SET-IS-INITIALIZED", value } as const)

export const initializeAppTC = () => (dispatch: Dispatch) => {

}