import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";
import {UnControlledAccordion} from "./components/accordion/UnControlledAccordion/UnControlledAccordion";

export function App() {
    return (
        <div className={"App"}>

            <OnOff />

            <UnControlledAccordion title={"Menu"}/>
            <UnControlledAccordion title={"Users"}/>
            {/*<div>*/}
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My Friends"}/>*/}
            {/*<Rating />*/}
            {/*<Accordion title={"Menu"} collapsed={true}/>*/}
            {/*<Accordion title={"Users"} collapsed={true}/>*/}
            {/*<Rating/>*/}
            {/*</div>*/}
        </div>
    )
}

type PageTitlePropsType = {
    title : string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

