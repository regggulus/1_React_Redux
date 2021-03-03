import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                <AppTitle/>
                <Rating/>
                <Accordion/>
            </div>

        </div>
    );
}

function AppTitle() {
    return (
        <div><h1>This is App component</h1></div>
    )
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return (
        <div>star</div>

    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </ul>
        </div>
    )
}

export default App;
