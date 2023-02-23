import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    /**
     * Title for your accordion component
     */
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Optional color of header text
     */
    color?: string
    /**
     * Array of items
     */
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    return (
        <div>
            <AccordionTitle color={props.color} title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 style={{color: props.color ? props.color : 'black'}}
               onClick={(e) => props.onChange()}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((i, index) => <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>)}
    </ul>
}

export default Accordion;