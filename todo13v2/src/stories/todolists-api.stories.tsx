import React, {useEffect, useState} from 'react'
import {todolistsAPI} from "../api/todolist-api";


export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then((response)=>{
                setState(response.data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "lol"
        todolistsAPI.createTodolist(title)
            .then((response)=>{
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "ebc90bcc-1265-4a0d-8199-c99f4dea95d8"
        todolistsAPI.deleteTodolist(todolistId)
            .then((response)=>{
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "ab9e936a-e748-4526-8628-76ecd0f591a3"
        const title = "Kek"
        todolistsAPI.updateTodolist({todolistId, title})
            .then((response)=>{
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
