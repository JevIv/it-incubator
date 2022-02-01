import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ActionsType, RootStateType, StoreType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType= {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (props: any) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/" element={<Profile />}/>
                        <Route path="/dialogs/" element={<DialogsContainer />}/>
                        <Route path="/users/" element={<UsersContainer />}/>
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
