import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RootStateType} from "./redux/state";

type AppPropsType= {
    state: RootStateType,
    addPost: (postMessage: string) => void
    updateNewPostText: (postMessage: string) => void
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/" element={<Profile profilePage={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/dialogs/" element={<Dialogs state={props.state.dialogsPage}/>}/>
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
