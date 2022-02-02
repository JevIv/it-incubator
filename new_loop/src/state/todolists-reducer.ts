import {TodolistType} from "../App";
import {v1} from "uuid";


type ActionsType = {
    type: string
    [key: string]: any
}

export const todolistsReducer = (state:TodolistType[], action:ActionsType): TodolistType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(t => t.id != action.id)
        }
        case "ADD-TODOLIST": {
            return [...state, {id: v1(),title: action.title, filter: "all"}]
        }
        default:
            throw new Error("Error")
    }
}