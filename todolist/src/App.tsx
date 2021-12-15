import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import {v1} from "uuid";
import AddItemForm from "./components/AddItemForm";

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
    const todoListID_1 = v1();
    const todoListID_2 = v1();
    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: "What to learn", filter: "All"},
        {id: todoListID_2, title: "What to buy", filter: "All"},]);

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
        copyState[todoListID] = tasks[todoListID].map(m =>
            m.id === id ? {...m, isDone: value} : m)
        setTasks(copyState);
    }

    const changeTaskTitle = (id: string, title: string, todoListID: string) => {
        const copyState = {...tasks}
        copyState[todoListID] = tasks[todoListID].map(m =>
            m.id === id ? {...m, title} : m); // title=title
        setTasks(copyState);
    }

    const changeTodoListTitle = (title: string, todoListID: string) => {
        setTodoLists(todoLists.map(tl =>
            tl.id === todoListID ? {...tl, title} : tl));
    }

    const addTodoList = (title: string) => {
        const newTodo: TodoListType = {
            id: v1(),
            title: title,
            filter: "All"
        }
        setTodoLists([...todoLists, newTodo])
        setTasks({...tasks, [newTodo.id]: []})
    }

    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(tl =>
            tl.id !== todoListID));
    }

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
                      removeTask={removeTask}
                      addTask={addTask}
                      tasksArray={newTask}
                      changeTaskStatus={changeTaskStatus}
                      todoLists={todoLists}
                      setTodoLists={setTodoLists}
                      removeTodoList={removeTodoList}
                      changeTaskTitle={changeTaskTitle}
                      changeTodoListTitle={changeTodoListTitle}
            />
        )
    })
    //UI: UI layer
    return (
        <div className="App">
            <AddItemForm addItem={addTodoList}/>
            {todoListComponents}
        </div>
    );
}

export default App;
