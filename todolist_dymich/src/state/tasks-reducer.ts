import {FilterValuesType, TasksStateType, TodolistType} from "../AppWithRedux";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType, toDoListId1, toDoListId2} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: "REMOVE-TASK"
    todolistId: string
    taskId: string
}
export type AddTaskActionType = {
    type: "ADD-TASK"
    todolistId: string
    title: string
}
export type ChangeTaskStatusActionType = {
    type: "CHANGE-TASK-STATUS"
    todolistId: string
    taskId: string
    isDone: boolean
}
export type ChangeTaskTitleActionType = {
    type: "CHANGE-TASK-TITLE"
    todolistId: string
    taskId: string
    title: string
}

export type ActionsType =
    RemoveTaskActionType |
    AddTaskActionType |
    ChangeTaskStatusActionType |
    ChangeTaskTitleActionType |
    AddTodolistActionType |
    RemoveTodolistActionType;

let initialState: TasksStateType = {}

export const tasksReducer = (state= initialState,
                                 action:ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const stateCopy = {...state};
            const tasks = state[action.todolistId];
            const filteredTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }
        case "ADD-TASK": {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId];
            const newTask = {id: v1(), title: action.title, isDone: false};
            const newTasks = [newTask, ...tasks];
            stateCopy[action.todolistId] = newTasks;
            return stateCopy;
        }
        case "CHANGE-TASK-STATUS": {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId];
            stateCopy[action.todolistId] = tasks.map(t => t.id === action.taskId ? {...t, isDone: action.isDone} : t)
            return stateCopy;

        }
        case "CHANGE-TASK-TITLE": {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId];
            stateCopy[action.todolistId] = tasks.map(t => t.id === action.taskId ? {...t, title: action.title} : t)
            return stateCopy;
        }
        case "ADD-TODOLIST": {
            const stateCopy = {...state};
            stateCopy[action.todolistId] = [];
            return stateCopy;
        }
        case "REMOVE-TODOLIST": {
            const stateCopy = {...state};
            delete stateCopy[action.id]
            return stateCopy
        }

        default:
            return state
        //throw new Error("Wrong action type")

    }
}

export const removeTaskAC = (taskId: string,
                             todolistId: string): RemoveTaskActionType => {
    return {type: "REMOVE-TASK", todolistId, taskId}
}
export const addTaskAC = (title: string,
                          todolistId: string): AddTaskActionType => {
    return {type: "ADD-TASK", title, todolistId}
}
export const changeTaskStatusAC = (taskId: string,
                                   todolistId: string,
                                   isDone: boolean ): ChangeTaskStatusActionType => {
    return {type: "CHANGE-TASK-STATUS", taskId, todolistId, isDone}
}
export const changeTaskTitleStatusAC = (taskId: string,
                                        todolistId: string,
                                        title: string ): ChangeTaskTitleActionType => {
    return {type: "CHANGE-TASK-TITLE", taskId, todolistId, title}
}