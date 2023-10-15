import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOff2} from "./components/OnOff2/OnOff2";

function hello() {
    debugger
    console.log("It-kamasutra!")
}

// hello()

function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title="This is APP component"/>
            <PageTitle title="My friends"/>
            Article 1
            <Rating value={4}/>
            <Accordion titleValue="Menu" collapsed={true}/>
            <Accordion titleValue="Users" collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff on={true}/>
            <OnOff on={false}/>
            <OnOff2/>
            <OnOff2/>
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
