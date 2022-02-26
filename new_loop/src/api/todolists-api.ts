import axios from "axios";


const settings = {
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "0cef6ec5-ea0b-4679-beff-cc75700e3c68"
    }
}

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
type ResponseType<D> = {
    resultCode: number
    messages: string[]
    data: D
}

export const todolistsAPI = {
    getTodolists() {
        return axios.get<TodolistType[]>("todo-lists", settings)
    },
    createTodolist(title: string) {
        return axios.post<ResponseType<{item: TodolistType}>>("todo-lists", {title}, settings)
    },
    updateTodolist(todolistId: string, title: string) {
        return axios.put<ResponseType<{}>>(`todo-lists/${todolistId}`,{title}, settings)
    },
    deleteTodolist(todolistId:string){
        return axios.delete<ResponseType<{}>>(`1.1/todo-lists/${todolistId}`, settings)
    }
}