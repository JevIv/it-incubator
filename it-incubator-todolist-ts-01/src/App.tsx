import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    //BLL: business layer
    const todoListTitle_1: string = "1 To do list"
    const todoListTitle_2: string = "2 To do list"

    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 1, title: "CSS", isDone: true},
        {id: 1, title: "REACT", isDone: false},
    ]
    const tasks_2: Array<TaskType> = [ //giving an array
        {id: 1, title: "Meat", isDone: false},
        {id: 1, title: "Beer", isDone: false},
        {id: 1, title: "Milk", isDone: true},
    ]

    //UI: UI layer
    return (
        <div className="App">
            <ToDoList title={todoListTitle_1} tasks={tasks_1}/>
            <ToDoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
