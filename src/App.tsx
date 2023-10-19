import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function hello() {
    debugger
    console.log("It-kamasutra!")
}

// hello()

function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(true)
    return (
        <div className="App">
            <PageTitle title="This is APP component"/>
            <PageTitle title="My friends"/>
            Article 1
            <Accordion titleValue="Menu" collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            Article 2
            <OnOff on={on} setOn={setOn}/>
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
            <UncontrolledAccordion titleValue="Menu"/>
            <UncontrolledAccordion titleValue="Users"/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <div>{props.title}</div>
}

export default App;
