import {Dispatch} from "redux";
import {authAPI} from "../api/todolists-api";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

const initialState: InitialStateType = {
    status: "idle",
    error: null,
    isInitialized: false
}

const slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setAppStatusAC: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
            state.status = action.payload.status
        },
        setAppErrorAC: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        },
        setAppInitializedAC: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
            state.isInitialized = action.payload.isInitialized
        },
    }
})

export const appReducer = slice.reducer

/*export const appReducer = (state: InitialStateType = initialState, action: ActionsType ): InitialStateType => {
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
};*/

export const {setAppErrorAC, setAppStatusAC, setAppInitializedAC} = slice.actions

/*
type ActionsType =
    | SetErrorActionType
    | SetStatusActionType
    | ReturnType<typeof setAppInitializedAC>

export type SetErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetStatusActionType = ReturnType<typeof setAppStatusAC>
*/

/*
export const setAppErrorAC = (error: string | null) => ({ type:"APP/SET-ERROR", error } as const)
export const setAppStatusAC = (status: RequestStatusType) => ({ type:"APP/SET-STATUS", status } as const)
export const setAppInitializedAC = (value: boolean) => ({ type:"APP/SET-IS-INITIALIZED", value } as const)
*/

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value: true}))
        } else {

        }
        dispatch(setAppInitializedAC(true))
    })
}