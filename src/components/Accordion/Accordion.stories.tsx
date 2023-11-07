// import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Accordion from './Accordion';
import {useState} from "react";

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;
// type Story = StoryObj<typeof Accordion>;
//
// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'Menu',
//         collapsed: false,
//         onChange: () => {
//         }
//     }
// };
// export const SecondStory: Story = {
//     args: {
//         titleValue: 'Menu',
//         collapsed: true,
//         onChange: () => {
//         }
//     }
// };
export default {
    component: 'Accordion'
}

const onChangeHandler = action('onChange')
const onClickCallback = action('some item was clicked')

export const CollapsedAccordion = () => {
    return <Accordion titleValue='Collapsed Accordion' collapsed={true} onChange={onChangeHandler} items={[]}
                      onClick={onClickCallback}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue='Opened Accordion' collapsed={false} onChange={() => {
    }} items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
        title: 'Artem',
        value: 3
    }, {title: 'Victor', value: 4}]} onClick={onClickCallback}/>
}

export const AccordionWithState = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue='Accordion with state' collapsed={collapsed}
                      onChange={() => setCollapsed((!collapsed))}
                      items={[
                          {title: 'Dimych', value: 1},
                          {title: 'Valera', value: 2},
                          {title: 'Artem', value: 3},
                          {title: 'Victor', value: 4}
                      ]} onClick={(id) => alert(`user with ID: ${id} should be happy!`)}/>
}

