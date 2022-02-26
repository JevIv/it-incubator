import React, {useEffect, useState} from "react";
import {todolistsAPI} from "../../api/todolists-api";


export default {
    title: "API"
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>({name: "Evgeny"})
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then((response)=>{
                setState(response.data)
            })
    }, [])
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export const CreateTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolist("New todolist")
            .then((response)=>{
                setState(response.data)
            })
    }, [])
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export const DeleteTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "2867efb1-1e55-4f95-8c22-977040402779"
        todolistsAPI.deleteTodolist(todolistId)
            .then((response)=>{
                setState(response.data)
            })
    }, [])
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export const UpdateTodolistsTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "a930bc15-d8f8-4a9a-a33d-8a0b470c95d5"
        todolistsAPI.updateTodolist(todolistId,"New title")
            .then((response)=>{
                setState(response.data)
            })
    }, [])
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = ""
        todolistsAPI.getTasks(todolistId)
            .then((response)=>{
                setState(response.data)
            })
    }, [])
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const deleteTask = () => {
        todolistsAPI.deleteTasks(todolistId, taskId)
            .then((response)=>{
                setState(response.data)
            })
    }
    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <input placeholder={"TodolistId"} value={todolistId} onChange={(e)=> {setTodolistId(e.currentTarget.value)}}/>
                <input placeholder={"TaskId"} value={taskId} onChange={(e)=> {setTaskId(e.currentTarget.value)}}/>
                <button onClick={deleteTask}>Delete task</button>
            </div>
        </div>
    );
};

