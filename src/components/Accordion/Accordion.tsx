import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    return (
        <div>
            <AccordionTitle onClick={props.onClick} title={props.titleValue} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;


// import React from "react";
//
// type AccordionPropsType = {
//     titleValue: string
//     collapsed: boolean
//     onClick: (collapsed: boolean) => void
// }
//
// function Accordion(props: AccordionPropsType) {
//     console.log('UncontrolledAccordion rendering')
//     return (
//         <div>
//             <AccordionTitle onClick={() => props.onClick(!props.collapsed)} title={props.titleValue}/>
//             {!props.collapsed && <AccordionBody/>}
//         </div>
//     )
// }
//
// type AccordionTitlePropsType = {
//     title: string
//     onClick: () => void
// }
//
// function AccordionTitle(props: AccordionTitlePropsType) {
//     console.log('AccordionTitle rendering')
//     return <h3 onClick={props.onClick}>{props.title}</h3>
// }
//
// function AccordionBody() {
//     console.log('AccordionBody rendering')
//     return (
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//     )
// }
//
// export default Accordion;
