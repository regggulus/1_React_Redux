import React from 'react';

export type CollapsedPropsType = boolean
export type AccordionPropsType = {
    title: string
    collapsed: CollapsedPropsType
    onClick: (collapsed: CollapsedPropsType) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} collapsed={!props.collapsed}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )

    type AccordionTitlePropsType = {
        title: string
        collapsed: CollapsedPropsType
        onClick: (collapsed: CollapsedPropsType) => void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        return (
            <div>
                <h3 onClick={ () => {props.onClick(props.collapsed)}}>{props.title}</h3>
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
}

