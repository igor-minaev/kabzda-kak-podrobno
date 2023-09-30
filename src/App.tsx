import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

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
            <Accordion titleValue = "Menu"/>
            <Accordion titleValue = "Users"/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={6}/>
        </div>
    );
}

function PageTitle(props:any) {
    console.log('PageTitle rendering')
    return <div>{props.title}</div>
}

export default App;
