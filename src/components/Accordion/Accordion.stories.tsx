import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'Components/Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired')
const onClickCallback = action('accordion mode change event fired')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
    items:[],
    onClick:onClickCallback

};

export const UsersUncollapsedMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UsersUncollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    onChange: callback,
    items:[
        {title:'Dimych',value:1},
        {title:'Igor',value:2},
        {title:'Viktor',value:3},
        {title:'Valera',value:4}
    ],
    onClick:onClickCallback
};



export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}

ModeChanging.args = {
    titleValue: 'Users',
    items:[
        {title:'Dimych',value:1},
        {title:'Igor',value:2},
        {title:'Viktor',value:3},
        {title:'Valera',value:4}
    ],
    onClick:(id)=>alert(`user with ID ${id} should be happy`)
}