import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";


export function App() {
    return (
        <div className={"App"}>
            This is App component
            <Rating/>
            <Accordion/>
        </div>
    )
}



