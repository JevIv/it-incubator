
type StateType = {
    age: number
    childrenCount: number
    name: string
}

type ActionsType = {
    type: string
    [key: string]: any
}

export const userReducer = (state:StateType, action:ActionsType): StateType => {
    switch (action.type) {
        case "INCREMENT-AGE":
            let stateCopy = {...state}
            stateCopy.age = state.age + 1
            return stateCopy
            case "INCREMENT-CHILDREN-COUNT":
            return {...state,
                childrenCount: state.childrenCount+1
            }
        case "CHANGE-NAME":
            return {...state,
                name: action.newName
            }
        default:
            throw new Error("Error")
    }
}