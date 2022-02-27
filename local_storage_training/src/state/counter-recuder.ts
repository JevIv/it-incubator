type InitialStateType = typeof initialState
export type IncValuesActionType = ReturnType<typeof incValueAC>
export type setValueFromLocalActionType = ReturnType<typeof setValueFromLocalAC>

type ActionsType = IncValuesActionType | setValueFromLocalActionType

const initialState = {
    value: 10
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