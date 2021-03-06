import React from 'react';

export function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </ul>
        </div>
    )
}

