import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";

export type FilterValuesType = "all" | "completed" | "active";
export type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    let toDoListId1 = v1();
    let toDoListId2 = v1();

    let [toDoLists, setToDolists] = useState<Array<TodolistType>>([
        {id: toDoListId1, title: "What to learn", filter: "all"},
        {id: toDoListId2, title: "What to buy", filter: "all"},
    ]);

    let [tasksObj, setTasks] = useState<TasksStateType>({
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
        let newTask = {id: v1(), title: title, isDone: false}
        let copyTasksObj = {...tasksObj};
        copyTasksObj[todolistId] = [newTask, ...tasksObj[todolistId]];
        setTasks(copyTasksObj);
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

    function changeTaskTitle(newTitle: string, taskId: string, todolistId: string) {
        //find correct array with todolistId
        let tasks = tasksObj[todolistId];
        //find correct string
        let task = tasks.find(t => t.id === taskId)
        //change task if we found it
        if (task) {
            task.title = newTitle;
            //set in state object copy for React render
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

    let changeTodoListTitle = (todolistId: string, newTitle:string) => {
        const todolist = toDoLists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.title = newTitle;
            setToDolists([...toDoLists]);
        }
    }

    function addTodolist(title: string) {
        let todolist: TodolistType = {
            id: v1(),
            title: title,
            filter: "all",
        };
        setToDolists([todolist, ...toDoLists]);
        setTasks({...tasksObj,[todolist.id]:[]})
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
                    return (<div>lol</div>
                       /* <Todolist key={tl.id}
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
                                  changeTodoListTitle={changeTodoListTitle}/>*/
                    )
                })
            }
        </div>
    );
}

export default App;
