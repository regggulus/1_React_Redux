import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";

type AppPropsType = {

}

function App(props: AppPropsType) {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className="App">
            <div>
                <OnOff on={switchOn} onChange={setSwitchOn}/>

                <PageTitle title={"This is App component"}/>
                <PageTitle title={"My Friends"}/>

                <hr/><h3>Un controlled</h3><hr/>
                <UnControlledOnOff/>

                <UnControlledRating />

                <UnControlledAccordion title={'Menu'}/>
                <UnControlledAccordion title={'Users'}/>

                <hr/><h3>Controlled</h3><hr/>

                <Accordion
                    title={"Menu"}
                    collapsed={accordionCollapsed}
                    onChange={ () => {setAccordionCollapsed(!accordionCollapsed)}}
                />
                <Accordion
                    title={"Users"}
                    collapsed={accordionCollapsed}
                    onChange={ () => {setAccordionCollapsed(!accordionCollapsed)}}
                />

                <Rating
                    value={ratingValue}
                    onClick={setRatingValue} />

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
