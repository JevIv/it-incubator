import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC, removeTodolistAC,
    todolistsReducer
} from "../../todolist_dymich/src/state/todolists-reducer"
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleStatusAC,
    removeTaskAC,
    tasksReducer
} from "./state/tasks-reducer";
import {changeTaskTitleAC} from "../../todolist/src/state/tasks-reducer";

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

    let toDoListId1 = v1();
    let toDoListId2 = v1();

    let [toDoLists, dispatchToTodolistsReducer] = useReducer(todolistsReducer,[
        {id: toDoListId1, title: "What to learn", filter: "all"},
        {id: toDoListId2, title: "What to buy", filter: "all"},
    ]);

    let [tasksObj, dispatchToTasksReducer] = useReducer(tasksReducer,{
        [toDoListId1]: [
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Html", isDone: true},
        ],
        [toDoListId2]: [
            {id: v1(), title: "Book", isDone: true},
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Beer", isDone: false},
            {id: v1(), title: "Bread", isDone: true},
        ]
    });

    function addTask(title: string, todolistId: string) {
        const action = addTaskAC(title, todolistId);
        dispatchToTasksReducer(action);
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        const action = changeTaskStatusAC(taskId, todolistId, isDone);
        dispatchToTasksReducer(action);
    }

    function changeTaskTitle(newTitle: string, taskId: string, todolistId: string) {
        const action = changeTaskTitleStatusAC(taskId, todolistId, newTitle);
        dispatchToTasksReducer(action);
    }

    function removeTask(id: string, todolistId: string) {
        const action = removeTaskAC(id, todolistId);
        dispatchToTasksReducer(action);

    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(value, todolistId)
        dispatchToTodolistsReducer(action);
    }

    let removeTodoList = (todolistId: string) => {
        const action = removeTodolistAC(todolistId);
        dispatchToTasksReducer(action);
        dispatchToTodolistsReducer(action);
    }

    let changeTodoListTitle = (todolistId: string, newTitle:string) => {
        const action = changeTodolistTitleAC(newTitle,todolistId);
        dispatchToTodolistsReducer(action);
    }

    function addTodolist(title: string) {
        const action = addTodolistAC(title);
        dispatchToTasksReducer(action);
        dispatchToTodolistsReducer(action);
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist} />
            {
                toDoLists.map((tl) => {
                    let tasksForTodolist = tasksObj[tl.id];
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
                                  tasks={tasksForTodolist}
                                  removeTask={removeTask}
                                  changeFilter={changeFilter}
                                  addTask={addTask}
                                  changeStatus={changeStatus}
                                  filter={tl.filter}
                                  removeTodoList={removeTodoList}
                                  changeTaskTitle={changeTaskTitle}
                                  changeTodoListTitle={changeTodoListTitle}/>
                    )
                })
            }
        </div>
    );
}

export default AppWithRedux;
