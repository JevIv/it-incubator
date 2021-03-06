import {FilterValuesType, TodolistType} from "../AppWithRedux";
import {v1} from "uuid";

export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST"
    id: string
}
export type AddTodolistActionType = {
    type: "ADD-TODOLIST"
    title: string
    todolistId: string
}
export type ChangeTodolistActionType = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER"
    id: string
    filter: FilterValuesType
}

export type ActionsType =
    RemoveTodolistActionType |
    AddTodolistActionType | ChangeTodolistActionType |
    ChangeTodolistFilterActionType

export let toDoListId1 = v1();
export let toDoListId2 = v1();

let initialState: Array<TodolistType> = [];

export const todolistsReducer = (state= initialState,
                                 action:ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(tl => tl.id != action.id)
        }
        case "ADD-TODOLIST": {
            return  [...state, {
                id: action.todolistId,
                title:action.title,
                filter: "all"
            }]
        }
        case "CHANGE-TODOLIST-TITLE": {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.title = action.title;
            }
            return [...state]
        }
        case "CHANGE-TODOLIST-FILTER": {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.filter = action.filter;
            }
            return [...state]
        }


        default:
            return state
            //throw new Error("Wrong action type")

    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: "REMOVE-TODOLIST", id: todolistId}
}
export const addTodolistAC = (title: string): AddTodolistActionType => {
    return {type: "ADD-TODOLIST", title: title, todolistId: v1()}
}
export const changeTodolistTitleAC = (title: string, id: string): ChangeTodolistActionType => {
    return {type: "CHANGE-TODOLIST-TITLE", title: title, id:id}
}
export const changeTodolistFilterAC = (filter: FilterValuesType, id: string): ChangeTodolistFilterActionType => {
    return {type: "CHANGE-TODOLIST-FILTER", filter: filter, id:id}
}