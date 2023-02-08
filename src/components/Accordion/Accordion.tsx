import React from "react";

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
}

function Accordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    return (
        <div>
            <AccordionTitle color={props.color} title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
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
    return <h3 style={{color: props.color ? props.color : 'black'}} onClick={(e) => props.onChange()}>-- {props.title} --</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;