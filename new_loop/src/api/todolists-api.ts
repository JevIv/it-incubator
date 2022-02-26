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
    messages: string[]
    data: D
}

export type TaskType ={
    description: string
    title: string
    status: number
    priority: number
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
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`,{title})
    },
    deleteTodolist(todolistId:string){
        return instance.delete<ResponseType>(`1.1/todo-lists/${todolistId}`)
    },
    getTasks(todolistId:string){
        return instance.get<GetTasksResponseType>(`1.1/todo-lists/${todolistId}/tasks`)
    },
    deleteTasks(todolistId:string, taskId:string){
        return instance.delete<ResponseType>(`1.1/todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId:string, taskId:string, model: UpdateTaskModelType){

    }

}