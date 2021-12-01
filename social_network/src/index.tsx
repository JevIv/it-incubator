import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {RootStateType} from "./redux/state";

type StateType = {
    state: Array<RootStateType>
}


const render = (props:StateType) => ReactDOM.render(
    <App state={props.state}/>,
    document.getElementById('root')
);

render(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
