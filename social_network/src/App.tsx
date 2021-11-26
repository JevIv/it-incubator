import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {DialogType, MessageType, PostType} from "./index";


export type PropsType = {
    postData: Array<PostType>
    dialogData: Array<DialogType>
    messageData: Array<MessageType>
}

const App = (props: PropsType) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/" element={<Profile state={props.state.profilePage}/>}/>
                        <Route path="/dialogs/" element={<Dialogs state={props.state.dialogsPage}}/>}/>
                        {/*<Route path="/news/" element={<Dialogs postData={props.postData}/>}/>
                        <Route path="/music/" element={<Dialogs postData={props.postData}/>}/>
                        <Route path="/settings/" element={<Dialogs postData={props.postData}/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
