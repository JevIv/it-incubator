import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";


function App() {

    let task1: Array<TaskType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Html", isDone: true},
    ]
    let task2: Array<TaskType> = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "Last Dance", isDone: true},
        {id: 3, title: "XXX", isDone: false},
        {id: 4, title: "Gentlemen of fortune", isDone: true},
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={task1}/>
            <Todolist title="Movie" tasks={task2}/>
        </div>
    );
}

export default App;
