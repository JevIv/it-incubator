import reportWebVitals from './reportWebVitals';
import state, {addPost, RootStateType, subscribe} from "./redux/state";

type renderPropsType = {
    addPost: (postMessage: string) => void
    state: RootStateType
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";


type AppPropsType = {
    addPost: (postMessage: string) => void
    state: RootStateType
}


const render = (props:AppPropsType) => ReactDOM.render(
    <App state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>,
    document.getElementById('root')
);


render(state);

subscribe(render);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
