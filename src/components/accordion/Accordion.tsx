import React from "react";

type AccordionPropsType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionBody title={props.title}/>
            <AccordionTitle/>
        </div>
    )
}

type AccordionBodyPropsType = {
    title : string
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}