import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";

type AppPropsType = {

}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <div>

                <UnControlledAccordion title={'Menu'}/>
                <UnControlledAccordion title={'Users'}/>

                <hr/><h3>Controlled</h3><hr/>

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
