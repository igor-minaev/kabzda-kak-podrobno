import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    return (
        <div>
            <AccordionTitle onChange={props.onChange} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((i, index) => {
                return <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>
            })}
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
