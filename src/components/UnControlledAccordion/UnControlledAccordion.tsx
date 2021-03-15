import React, {useState} from 'react';

type AccordionPropsType = {
    title: string

}

export function UnControlledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody/>}

        </div>
    )

    type AccordionTitlePropsType = {
        title: string
        onClick: () => void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        return (
            <div>
                <h3 onClick={() => {
                    props.onClick()
                }}>{props.title}</h3>
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
}

