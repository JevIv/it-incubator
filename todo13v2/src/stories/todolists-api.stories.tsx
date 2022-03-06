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
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const createTask = () => {
            todolistsAPI.createTask(todolistId,taskTitle)
                .then((response)=>{
                    setState(response.data)
                })
    }

    return <div> {JSON.stringify(state)}
    <div>
        <input placeholder={"Todolist Id"}
               value={todolistId}
               onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
        <input placeholder={"Task Title"}
               value={taskTitle}
               onChange={(e)=>{setTaskTitle(e.currentTarget.value)}}/>
        <button onClick={createTask}>Create task</button>
    </div>
    </div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")

    const getTasks = () => {
        todolistsAPI.getTasks(todolistId)
            .then((response)=>{
                setState(response.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"Todolist Id"}
                   value={todolistId}
                   onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
            <button onClick={getTasks}>Get tasks</button>
        </div>
    </div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")
    const [taskTitle, setTaskTitle] = useState<string>("title1")
    const [description, setDescription] = useState<string>("Description1")
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")

    const updateTask = () => {
        todolistsAPI.updateTask(todolistId,taskId, {
            description: description,
            title: taskTitle,
            status: status,
            priority: priority,
            startDate: "",
            deadline: ""
        })
            .then((response)=>{
                setState(response.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"Todolist id"}
                   value={todolistId}
                   onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
            <input placeholder={"Task id"}
                   value={taskId}
                   onChange={(e)=>{setTaskId(e.currentTarget.value)}}/>
            <input placeholder={"Task Title"}
                   value={taskTitle}
                   onChange={(e)=>{setTaskTitle(e.currentTarget.value)}}/>
            <input placeholder={"Description"}
                   value={description}
                   onChange={(e)=>{setDescription(e.currentTarget.value)}}/>
            <input placeholder={"Status"}
                   value={status}
                   type={"number"}
                   onChange={(e)=>{setStatus(+e.currentTarget.value)}}/>
            <input placeholder={"Priority"}
                   value={priority}
                   type={"number"}
                   onChange={(e)=>{setPriority(+e.currentTarget.value)}}/>
            <button onClick={updateTask}>Create task</button>
        </div>
    </div>
}
