import {Dispatch} from "redux";
import {AppStateType} from "./store";

type InitialStateType = typeof initialState
export type IncValueActionType = ReturnType<typeof incValueAC>
export type SetValueFromLocalActionType = ReturnType<typeof setValueFromLocalAC>

type ActionsType = IncValueActionType | SetValueFromLocalActionType

const initialState = {
    value: 0
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "SET-VALUE-FROM-LOCAL":
            return  {
                ...state, value: action.value
            }
        default:
            return state
    }
}

export const incValueAC = () => {
    return {type: "INC-VALUE"} as const
}
export const setValueFromLocalAC = (value: number) => {
    return {type: "SET-VALUE-FROM-LOCAL", value} as const
}
//Thunk
/*
export const incValuesTC = () => (dispatch: Dispatch, getState: ()=> AppStateType) => {
    let currentValue = getState().counter.value
    localStorage.setItem("counterValue", JSON.stringify(currentValue + 1))
    dispatch(incValueAC())
}
export const setValueFromLsTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem("counterValue")
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(setValueFromLocalAC(newValue))
    }
}*/
