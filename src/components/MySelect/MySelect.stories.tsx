// import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {MySelect} from './MySelect';
import {useState} from "react";

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;
// type Story = StoryObj<typeof Accordion>;
//
//
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
    component: 'MySelect'
}

const onChangeHandler = action('onChange')
const onClickCallback = action('some item was clicked')

export const CollapsedAccordion = () => {
    return <MySelect value={'Minsk'} onChange={() => {
    }} items={[]}/>
}
