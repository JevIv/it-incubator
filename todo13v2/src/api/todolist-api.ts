import axios from "axios";


const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "0cef6ec5-ea0b-4679-beff-cc75700e3c68"
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    ...settings
})

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
type ResponseType<D = {}>= {
    resultCode: number
    fieldsErrors: string[]
    messages: string[]
    data: D
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgent = 3,
    Later = 4
}

export type TaskType ={
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type UpdateTaskModelType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

type GetTasksResponseType = {
    error: string | null
    totalcount: number
    items: TaskType[]
}

export const todolistsAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>("todo-lists")
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item: TodolistType}>>("todo-lists", {title})
    },
    updateTodolist(payload:{todolistId: string, title: string}) {
        return instance.put<ResponseType>(`todo-lists/${payload.todolistId}`, {title: payload.title})
    },
    deleteTodolist(todolistId:string){
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    getTasks(todolistId:string){
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, taskTitle: string) {
        return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {title: taskTitle})
    },
    deleteTasks(payload: {todolistId: string, taskId: string}){
        return instance.delete<ResponseType>(`todo-lists/${payload.todolistId}/tasks/${payload.taskId}`)
    },
    updateTask(todolistId:string, taskId:string, model: UpdateTaskModelType){
        return instance.put<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
    }

}