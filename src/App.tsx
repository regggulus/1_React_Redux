import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion';
import {Rating} from "./components/Rating";

type AppPropsType = {
    // value: number
}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <div>
                <PageTitle title={"This is App component"}/>
                <PageTitle title={"My Friends"}/>
                Article 1
                <Rating value={3}/>
                <Accordion title={"Menu"}/>
                <Accordion title={"Users"}/>
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

type PagePropsType = {
    title: string
}

function PageTitle(props: PagePropsType) {
    return (
        <div><h1>{props.title}</h1></div>
    )
}

export default App;
