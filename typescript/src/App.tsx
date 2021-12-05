import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Route, Routes} from "react-router-dom";
import state from "./redux/state";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";

function App() {

    let message = state.profilePage.posts[0].message
    let message2 = state.profilePage.posts[1].message
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
{/*            <PageTitle title={"This is APP component"}/>
            <div>This is APP component</div>
            <input/>
            Artcile 1
            <UnControlledRating value={3}/>
            Artcile 2
            <UnControlledRating value={6}/>
            <UncontrolledAccordion title={"Menu"} collapsed={false}/>
            <UncontrolledAccordion title={"Users"} collapsed={true}/>
            <Routes>
                <Route path={"/hello"} element={<HelloMessage message={message}/>}/>
                <Route path={"/bye"} element={<ByeMessage message={message2}/>}/>
                    </Routes>*/}
            <OnOff on={switchOn}
                   onChange={(on)=> {setSwitchOn(on)}}/>
            <UnControlledOnOff  onChange={setSwitchOn} /> {switchOn.toString()}
            <UncontrolledAccordion title={"Menu"}/>
            <UnControlledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={"--Menu--"}
                       collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(accordionCollapsed)}}/>


        </div>
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
