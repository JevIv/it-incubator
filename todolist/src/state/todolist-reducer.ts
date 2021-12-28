import {filterType, TodoListType} from "../App";
import {v1} from "uuid";

export type ActionsType =
    RemoveTodolistActionType |
    AddTodolistActionType | ChangeTodolistActionType |
    ChangeTodolistFilterActionType

export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST",
    id: string
}
export type AddTodolistActionType = {
    type: "ADD-TODOLIST",
    title: string
}
export type ChangeTodolistActionType = {
    type: "CHANGE-TODOLIST-TITLE",
    id: string,
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER",
    id: string,
    filter: filterType,
}

export const todoListsReducer = (todoLists: Array<TodoListType>, action: ActionsType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return todoLists.filter(tl => tl.id != action.id)
        }
        case "ADD-TODOLIST": {
            return [...todoLists,{
                id: v1(),
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
    return {type: "ADD-TODOLIST", title: title}
}
export const ChangeTodolistTitleAC = (title: string, id: string): ChangeTodolistActionType => {
    return {type: "CHANGE-TODOLIST-TITLE", title: title, id:id}
}
export const ChangeTodolistFilterAC = (filter: filterType, id: string): ChangeTodolistFilterActionType => {
    return {type: "CHANGE-TODOLIST-FILTER", filter: filter, id:id}
}