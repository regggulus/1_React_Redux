import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

type AppPropsType = {
    // value: number
}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <div>
                <OnOff/>

                <PageTitle title={"This is App component"}/>
                <PageTitle title={"My Friends"}/>
                <h3>Article 1</h3>

                <UnControlledRating />

                <UnControlledAccordion title={'Menu'}/>
                <UnControlledAccordion title={'Users'}/>

                <hr/>
                <h3>Article 2</h3>

                {/*<Accordion title={"Menu"} collapsed={true}/>
                <Accordion title={"Users"} collapsed={false}/>*/}

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
