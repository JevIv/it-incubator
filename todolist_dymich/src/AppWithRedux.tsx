import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {AddItemForm} from "./AddItemForm";
import {addTodolistAC} from "../../todolist_dymich/src/state/todolists-reducer"
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";

export type FilterValuesType = "all" | "completed" | "active";
export type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {

    const dispatch = useDispatch();
    const todolists = useSelector<AppRootState, Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)


    function addTodolist(title: string) {
        const action = addTodolistAC(title);
        dispatch(action);
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist} />
            {
                todolists.map((tl) => {
                    let tasksForTodolist = tasks[tl.id];
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                    }
                    if (tl.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
                    }
                    return (
                        <Todolist key={tl.id}
                                  todoListId={tl.id}
                                  title={tl.title}
                                  filter={tl.filter}
                    />
                    )
                })
            }
        </div>
    );
}

export default AppWithRedux;
