import React from 'react';

// export type CollapsedPropsType = boolean
export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.title}
                collapsed={props.collapsed}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

    type AccordionTitlePropsType = {
        title: string
        collapsed: boolean
        onChange: () => void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        return (
            <div>
                <h3 onClick={props.onChange}>{props.title}</h3>
            </div>
        )
    }

    function AccordionBody() {
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


