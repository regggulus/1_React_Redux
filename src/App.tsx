import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion';
import {Rating} from "./components/Rating";

function App() {
    return (
        <div className="App">
            <div>
                <AppTitle/>
                Article 1
                <Rating value={3}/>
                <Accordion/>
                Article 2
                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
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
