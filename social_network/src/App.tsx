import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RootStateType} from "./redux/state";


const App = (props: RootStateType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/" element={<Profile state={props.profilePage}/>}/>
                        <Route path="/dialogs/" element={<Dialogs state={props.dialogsPage}/>}/>
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
