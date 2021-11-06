import React from 'react';


function Accordion() {
    return (
        <div>
            <AccordionTitle />
            <AccordionBody />
        </div>
    );
}

function AccordionTitle() {
    return (
        <h3>Menu</h3>
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