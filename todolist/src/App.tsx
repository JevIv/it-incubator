import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList";

export type TaskType = {
    id: number
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
            {id: 1, title: "HTML", isDone: true},
            {id: 2, title: "CSS", isDone: true},
            {id: 3, title: "REACT", isDone: false},
            {id: 4, title: "TypeScript", isDone: true},
            {id: 5, title: "JavaScript", isDone: false},
            {id: 6, title: "Python", isDone: true},
            {id: 7, title: "Django", isDone: false},
        ]
    )

    const removeTask = (mId: number) => {
        //tasks1=tasks1.filter(f => f.id !==mId)
        setTasks1(tasks1.filter(f => f.id !== mId))
        console.log(tasks1)
    }

    const [filter, setMyFilter] = useState<filterType>("All")

    const setFilter = (value: filterType) => {
        setMyFilter(value)
        console.log(filter)
    }

    let newTask = tasks1;
    newTask = filter === "All" ? tasks1 : //if all return all tasks
        filter === "Active" ? tasks1.filter((f => !f.isDone)) : //if active return undone
        filter === "Completed" ? tasks1.filter((f => f.isDone)) : //if completed return isDona
        tasks1
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
                      tasks={newTask}
                      removeTask={removeTask}
                      setFilter={setFilter}
            />
            {/*<ToDoList title={todoListTitle_2}
            tasks={tasks_2}/>*/}
        </div>
    );
}

export default App;