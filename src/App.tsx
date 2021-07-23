import React from 'react';
import './App.css';
import {Rating} from "./Rating";


export function App() {
    return (
        <div className={"App"}>
            This is App component
            <Rating/>
        </div>
    )
}


function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
