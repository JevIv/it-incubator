import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
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
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{ props.title }</h1>
}

export default App;