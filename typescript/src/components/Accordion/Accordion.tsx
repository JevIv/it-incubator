import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {
    /*if (props.collapsed) {
        return <AccordionTitle title={props.title}/>
    } else {*/
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange} value={!props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
            {/* {props.collapsed === false && <AccordionBody/>}*/}
        </div>
    );
};

type AccordionTitlePropsType = {
    value: boolean
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onChange={props.onChange}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    );
}

export default Accordion;