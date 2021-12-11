import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";


type AppPropsType = {
    addPost: (postMessage: string) => void
    state: RootStateType
}


export const render = (props:AppPropsType) => ReactDOM.render(
    <App state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>,
    document.getElementById('root')
);
