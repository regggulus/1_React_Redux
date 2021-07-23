import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";


export function App() {
    return (
        <div className={"App"}>
            <AppTitle/>
            <Rating />
            <Accordion/>
            <Rating/>

        </div>
    )
}

function AppTitle() {
    return(
        <div>
            <h3>This is App component</h3>
        </div>
    )
}



