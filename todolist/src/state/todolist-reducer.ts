import {filterType, TaskStateType, TodoListType} from "../AppWithReducers";
import {v1} from "uuid";

export type ActionsType =
    RemoveTodolistActionType |
    AddTodolistActionType | ChangeTodolistActionType |
    ChangeTodolistFilterActionType

export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST"
    id: string
}
export type AddTodolistActionType = {
    type: "ADD-TODOLIST"
    title: string
    id: string
}
export type ChangeTodolistActionType = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string,
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER"
    id: string,
    filter: filterType,
}

let initialState: Array<TodoListType> = []

export const todoListsReducer = (todoLists= initialState, action: ActionsType): Array<TodoListType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return todoLists.filter(tl => tl.id != action.id)
        }
        case "ADD-TODOLIST": {
            return [...todoLists,{
                id: action.id,
                title: action.title,
                filter: "All"
            }]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return todoLists.map(tl => tl.id === action.id ? {...tl, title:action.title} : tl)
        }
        case "CHANGE-TODOLIST-FILTER": {
            return todoLists.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)
        }

        default:
            return todoLists

    }
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: "REMOVE-TODOLIST", id: todolistId}
}
export const AddTodolistAC = (title: string): AddTodolistActionType => {
    return {type: "ADD-TODOLIST", title: title, id:v1()}
}
export const ChangeTodolistTitleAC = (title: string, id: string): ChangeTodolistActionType => {
    return {type: "CHANGE-TODOLIST-TITLE", title: title, id:id}
}
export const ChangeTodolistFilterAC = (filter: filterType, id: string): ChangeTodolistFilterActionType => {
    return {type: "CHANGE-TODOLIST-FILTER", filter: filter, id:id}
}