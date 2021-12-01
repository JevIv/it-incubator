import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type filterType = "All" | "Active" | "Completed"

function App() {
    //BLL: business layer
    const todoListTitle_1: string = "1 To do list"
    //const todoListTitle_2: string = "2 To do list"

    /*let tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
        {id: 4, title: "TypeScript", isDone: true},
        {id: 5, title: "JavaScript", isDone: false},
        {id: 6, title: "Python", isDone: true},
        {id: 7, title: "Django", isDone: false},
    ]*/

    const [tasks1, setTasks1] = useState(
        [
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "REACT", isDone: false},
            {id: v1(), title: "TypeScript", isDone: true},
            {id: v1(), title: "JavaScript", isDone: false},
            {id: v1(), title: "Python", isDone: true},
            {id: v1(), title: "Django", isDone: false},
        ]
    )

    const removeTask = (mId: string) => {
        //tasks1=tasks1.filter(f => f.id !==mId)
        setTasks1(tasks1.filter(f => f.id !== mId))
        console.log(tasks1)
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks1([newTask, ...tasks1]);
    }

    const changeStatus = (id: string, value: boolean) => {
        setTasks1(tasks1.map(m => m.id === id ? {...m,isDone:value} : m))
    }

    /*const [filter, setMyFilter] = useState<filterType>("All")

    const setFilter = (value: filterType) => {
        setMyFilter(value)
        console.log(filter)
    }

    let newTask = tasks1;
    newTask = filter === "All" ? tasks1 : //if all return all tasks
        filter === "Active" ? tasks1.filter((f => !f.isDone)) : //if active return undone
        filter === "Completed" ? tasks1.filter((f => f.isDone)) : //if completed return isDona
        tasks1*/
    //let newTask = tasks1.filter(f => f.isDone)
    /*if(filter === "Active") {
        newTask = tasks1.filter(f => !f.isDone)
    }
    if(filter === "Completed") {
        newTask = tasks1.filter(f => f.isDone)
    }*/

    /*const tasks_2: Array<TaskType> = [ //giving an array
        {id: 1, title: "Meat", isDone: false},
        {id: 1, title: "Beer", isDone: false},
        {id: 1, title: "Milk", isDone: true},
    ]*/

    //UI: UI layer
    return (
        <div className="App">
            <ToDoList title={todoListTitle_1}
                      //tasks={newTask}
                      removeTask={removeTask}
                      //setFilter={setFilter}
                      addTask={addTask}
                      tasksArray={tasks1}
                      changeStatus={changeStatus}
            />
            {/*<ToDoList title={todoListTitle_2}
            tasks={tasks_2}/>*/}
        </div>
    );
}

export default App;
