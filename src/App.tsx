import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion';
import {Rating} from "./components/Rating";

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

export default App;
