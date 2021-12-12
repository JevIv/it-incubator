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

export type TodoListType = {
    id: string,
    title: string,
    filter: filterType
}

export type TaskStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    //BLL: business layer
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
    /*const [tasks, setTasks] = useState(
    [
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
        {id: v1(), title: "TypeScript", isDone: true},
        {id: v1(), title: "JavaScript", isDone: false},
        {id: v1(), title: "Python", isDone: true},
        {id: v1(), title: "Django", isDone: false},
    ]
)*/

    const todoListTitle_1: string = "1 To do list"
    const todoListID_1 = v1();
    const todoListID_2 = v1();
    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: "What to learn", filter: "All"},
        {id: todoListID_2, title: "What to buy", filter: "All"},
    ]);

    const [tasks, setTasks] = useState<TaskStateType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "REACT", isDone: false},
            {id: v1(), title: "TypeScript", isDone: true},
            {id: v1(), title: "JavaScript", isDone: false},
            {id: v1(), title: "Python", isDone: true},
            {id: v1(), title: "Django", isDone: false},
        ],
        [todoListID_2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Bread", isDone: false},
            {id: v1(), title: "Butter", isDone: true},
            {id: v1(), title: "Pork", isDone: false},
            {id: v1(), title: "Apples", isDone: true},
            {id: v1(), title: "Celery", isDone: false},
        ]
    });

    const removeTask = (mId: string, todoListID: string) => {
        //tasks1=tasks1.filter(f => f.id !==mId)
        //setTasks(tasks.filter(f => f.id !== mId))
        //console.log(tasks)
        const copyState = {...tasks}
        copyState[todoListID] = tasks[todoListID].filter(f => f.id !== mId)
        setTasks(copyState);
    }

    const addTask = (title: string, todoListID: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        const copyState = {...tasks}
        copyState[todoListID] = [newTask, ...tasks[todoListID]]
        setTasks(copyState);
    }

    const changeTaskStatus = (id: string, value: boolean, todoListID: string) => {
        const copyState = {...tasks}
        copyState[todoListID] = tasks[todoListID].map(m => m.id === id ? {...m, isDone: value} : m)
        //setTasks(tasks.map(m => m.id === id ? {...m,isDone:value} : m))
        setTasks(copyState);
    }


    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(tl => tl.id !== todoListID));
    }
/*

    const getTasksForRender = (todoList: TodoListType) => {
        switch (todoList.filter) {
            case "active":
                return tasks[todoList.id].filter(t => !t.isDone)
            case "completed":
                return tasks[todoList.id].filter(t => t.isDone)
            default:
                return tasks[todoList.id]
        }
    }
*/


    const todoListComponents = todoLists.map(tl => {

        let newTask = tl.filter === "All" ? tasks[tl.id] : //if all return all tasks
            tl.filter === "Active" ? tasks[tl.id].filter((f => !f.isDone)) : //if active return undone
                tl.filter === "Completed" ? tasks[tl.id].filter((f => f.isDone)) : //if completed return isDona
                    tasks[tl.id]
        return (
            <ToDoList key={tl.id}
                      id={tl.id}
                      title={tl.title}
                      filter={tl.filter}
                //tasks={newTask}
                      removeTask={removeTask}
                //setFilter={setFilter}
                      addTask={addTask}
                      tasksArray={newTask}
                      changeTaskStatus={changeTaskStatus}
                      todoLists={todoLists}
                      setTodoLists={setTodoLists}
                      removeTodoList={removeTodoList}
            />
        )
    })

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
            {todoListComponents}
            {/*<ToDoList title={todoListTitle_2}
            tasks={tasks_2}/>*/}
        </div>
    );
}

export default App;
