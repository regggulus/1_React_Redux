import React from 'react';
import './App.css';

export function App() {
    return (
        <div className={"App"}>
            <h2>This is App component</h2>
            <Rating/>
            <Accordion/>
        </div>
    )
}

function Rating() {
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    )
}

function Accordion () {
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

