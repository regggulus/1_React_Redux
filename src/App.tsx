import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";

export function App() {
    return (
        <div className={"App"}>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>
            <Rating />
            <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={true}/>
            <Rating/>
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

