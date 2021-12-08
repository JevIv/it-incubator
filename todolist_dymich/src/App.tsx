import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active";
type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

function App() {

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false}
        let tasks = tasksObj[todolistId];
        let newTasks = [task, ...tasks];
        tasksObj[todolistId] = newTasks;
        setTasks({...tasksObj});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = !task.isDone;
            tasksObj[todolistId] = [...tasks]
            setTasks({...tasksObj});
        }
    }

    function removeTask(id: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let filteredTasks = tasks.filter(t => t.id !== id);
        tasksObj[todolistId] = filteredTasks
        setTasks({...tasksObj});

    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = toDoLists.find(tl => tl.id === todolistId);
        if (todolist){
            todolist.filter = value;
            setToDolists([...toDoLists]);
        }
    }

    let removeTodoList = (todolistId: string) => {
        let filteredTodoList = toDoLists.filter(tl => tl.id !== todolistId)
        setToDolists(filteredTodoList);
        delete tasksObj[todolistId];
        setTasks({...tasksObj});
    }

    let toDoListId1 = v1();
    let toDoListId2 = v1();

    let [toDoLists, setToDolists] = useState<Array<TodolistType>>([
    {id: toDoListId1, title: "What to learn", filter: "active"},
    {id: toDoListId2, title: "What to buy", filter: "completed"},
    ]);

    let [tasksObj, setTasks] = useState({
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

    return (
        <div className="App">
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
                                  todoLisId={tl.id}
                                  title={tl.title}
                                  tasks={tasksForTodolist}
                                  removeTask={removeTask}
                                  changeFilter={changeFilter}
                                  addTask={addTask}
                                  changeStatus={changeStatus}
                                  filter={tl.filter}
                                  removeTodoList={removeTodoList}/>
                    )
                })
            }
        </div>
    );
}

export default App;
