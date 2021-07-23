import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";


export function App() {
    return (
        <div className={"App"}>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"Users"}/>
            <Rating value={3}/>
            <Accordion title={"Menu"}/>
            <Accordion title={"List"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    )
}

function PageTitle(props: any) {
    return(
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}



