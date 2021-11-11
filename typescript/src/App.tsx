import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {BrowserRouter, Route} from "react-router-dom";
import state from "./redux/state";

function App() {

    let message = state.profilePage.posts[0].message
    let message2 = state.profilePage.posts[1].message

    return (
        <BrowserRouter>
            <div className="App">
                <PageTitle title={"This is APP component"}/>
                <div>This is APP component</div>
                <input/>
                Artcile 1
                <Rating value={3}/>
                Artcile 2
                <Rating value={6}/>
                <Accordion title={"This is Accordion title"} collapsed={false}/>
                <Accordion title={"This is Accordion title 2"} collapsed={true}/>
                <Route path={"/hello"} render={ () => <HelloMessage message={message}/>}/>
                <Route path={"/bye"} render={ () => <ByeMessage message={message2}/>}/>
            </div>
        </BrowserRouter>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

type MessageType = {
    message: string
}

function HelloMessage(props: MessageType) {
    return <h2>{props.message}</h2>
}

const ByeMessage: React.FC<MessageType> = (props) => {
    return <h2>{props.message}</h2>
}

export default App;
