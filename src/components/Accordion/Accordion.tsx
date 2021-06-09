import React from 'react';

// export type CollapsedPropsType = boolean

type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[] //альтернатива Array<string>
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.title}
                collapsed={props.collapsed}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
                <h3 onClick={(e) => props.onChange()}>{props.title}{props.collapsed}</h3>
            </div>
        )
    }
export type AccordionBodyPropsType = {
    items: ItemType[] //альтернатива Array<string>
    onClick: (value: any) => void
}
    function AccordionBody(props: AccordionBodyPropsType) {
        return (
            <div>
                <ul>
                    {props.items.map((i, index)  => <li onClick={ () => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
                </ul>
            </div>
        )
    }


