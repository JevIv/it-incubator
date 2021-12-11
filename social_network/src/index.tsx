import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";


type AppPropsType = {
    addPost: (postMessage: string) => void
    state: RootStateType
    updateNewPostText: (postMessage: string) => void
}


const render = () => ReactDOM.render(
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
    document.getElementById('root')
);


render();

subscribe(render);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
