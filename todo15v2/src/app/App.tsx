import React, {useCallback, useEffect} from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {Menu} from '@mui/icons-material';
import {CircularProgress, LinearProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {RequestStatusType} from "../../../todo13v2/src/app/app-reducer";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Login} from "../features/Login/Login";
import {initializeAppTC} from "./app-reducer";
import {logoutTC} from "../features/Login/auth-reducer";


function App() {
    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const initialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    const logoutHandler = useCallback(() => {
        dispatch(logoutTC)
    }, [])

    if(!initialized) {
        return <div style={{ position: "fixed", top: "30%", textAlign: "center", width: "100%"}}>
            <CircularProgress />
        </div>
    }




    return (
        <BrowserRouter>
            <div className="App">
                <AppBar position="static">
                    {status === "loading" && <LinearProgress color="secondary"/>}
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6">
                            News
                        </Typography>
                        {/*<Button color="inherit">Log in</Button>*/}
                        {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Log out</Button>}
                    </Toolbar>
                </AppBar>
                <Container fixed>
                    <Routes>
                        <Route path="/" element={<TodolistsList/>}/>
                        <Route path="/login/" element={<Login />}/>
                    </Routes>
                </Container>
            </div>
        </BrowserRouter>
    )
}

export default App
