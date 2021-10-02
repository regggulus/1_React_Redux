import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";

export function App() {
    return (
        <div className={"App"}>
            <h2>This is App component</h2>
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <Accordion/>
        </div>
    )
}

