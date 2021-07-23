import React from 'react';
import './App.css';
import {Rating} from "./Rating";
import {Accordion} from "./Accordion";


export function App() {
    return (
        <div className={"App"}>
            This is App component
            <Rating/>
            <Accordion/>
        </div>
    )
}



