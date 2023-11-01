import type {Meta, StoryObj} from '@storybook/react';

import Accordion from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
// export const CollapsedAccordion: Story = {
//     render: () => <Accordion titleValue='Menu' collapsed={true} onChange={()=>{}}/>,
// };

// export const OpenedAccordion: Story = {
//     render: () => <Accordion titleValue='Menu' collapsed={false} onChange={()=>{}}/>,
// };

export const CollapsedAccordion = () => {
    return <Accordion titleValue='Collapsed Accordion' collapsed={true} onChange={() => {
    }}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue='Opened Accordion' collapsed={false} onChange={() => {
    }}/>
}

export const AccordionWithState = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue='Accordion with state' collapsed={collapsed} onChange={() => setCollapsed((!collapsed))}/>
}

