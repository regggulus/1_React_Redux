import React from 'react';

type AccordionPropsType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props: any) {
    return (
        <div>
            <h3>{props.title}</h3>
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

