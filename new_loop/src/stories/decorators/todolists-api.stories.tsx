import React, {useEffect, useState} from "react";
import {todolistsAPI} from "../../api/todolists-api";
import axios from "axios";


export default {
    title: "API"
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "0cef6ec5-ea0b-4679-beff-cc75700e3c68"
    }
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

