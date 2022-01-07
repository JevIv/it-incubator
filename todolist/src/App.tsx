import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import {v1} from "uuid";
import AddItemForm from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Menu} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export type TaskType = {
    id: string
    title: string
    isDone: boolean }
export type filterType = "All" | "Active" | "Completed"
export type TodoListType = {
    id: string,
    title: string,
    filter: filterType }

export type TaskStateType = {
    [key: string]: Array<TaskType> }

function App() {
    //BLL: business layer
    //const todoListTitle_2: string = "2 To do list"
    const classes = useStyles();
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
            <Paper elevation={3} style={{ padding: "10px", margin: "10px"}} >
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
            </Paper>
        )
    })
    //UI: UI layer
    return (
        <div className="App">
            <div className={classes.root}>
                <AppBar position={"static"}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
                <Container fixed>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        style={{ padding: "10px" }}
                        >
                        <AddItemForm addItem={addTodoList}/>
                    </Grid>
                    <Grid container spacing={3}>
                        {todoListComponents}
                    </Grid>
                </Container>
        </div>
    );
}

export default App;
