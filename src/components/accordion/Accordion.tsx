import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

    return (
        props.collapsed === true ?
        <div>
            <AccordionBody title={props.title}/>
            <AccordionTitle/>
        </div> : <div>
                <AccordionBody title={props.title}/>
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