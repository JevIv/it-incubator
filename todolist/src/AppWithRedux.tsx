import React, {useReducer, useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import {v1} from "uuid";
import AddItemForm from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Menu} from "@material-ui/icons";
import {AddTodolistAC, ChangeTodolistTitleAC, RemoveTodolistAC, todoListsReducer} from "./state/todolist-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

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
    [key: string]: Array<TaskType>
}

/*export type TaskStateType = {
    [key: string]: Array<TaskType> | string
    [key: number]: Array<TaskType> | string
}*/

function AppWithRedux() {
    //BLL: business layer
    //const todoListTitle_2: string = "2 To do list"
    const classes = useStyles();

    const todoLists = useSelector<AppRootStateType, Array<TodoListType>>((state) => state.todolists)
    const tasks = useSelector<AppRootStateType, TaskStateType>((state) => state.tasks)
    const dispatch = useDispatch()

    const removeTask = (mId: string, todoListID: string) => {
        let action = removeTaskAC(mId, todoListID)
        dispatch(action)
    }

    const addTask = (title: string, todoListID: string) => {
        let action = addTaskAC(title, todoListID)
        dispatch(action)
    }

    const changeTaskStatus = (id: string, value: boolean, todoListID: string) => {
        let action = changeTaskStatusAC(id, todoListID, value)
        dispatch(action)
    }

    const changeTaskTitle = (id: string, todoListID: string,title: string,) => {
        let action = changeTaskTitleAC(id, todoListID, title)
        dispatch(action)
    }

    const changeTodoListTitle = (title: string, todoListID: string) => {
        let action = ChangeTodolistTitleAC(title, todoListID)
        dispatch(action)
    }

    const addTodoList = (title: string) => {
        let action = AddTodolistAC(title)
        dispatch(action)
    }

    const removeTodoList = (todoListID: string) => {
        let action = RemoveTodolistAC(todoListID)
        dispatch(action)
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
                      //removeTask={removeTask}
                      //addTask={addTask}
                      tasksArray={newTask}
                      //changeTaskStatus={changeTaskStatus}
                      todoLists={todoLists}
                      //setTodoLists={setTodoLists}
                      //removeTodoList={removeTodoList}
                      //changeTaskTitle={changeTaskTitle}
                      //changeTodoListTitle={changeTodoListTitle}
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

export default AppWithRedux;
