import React, {useState} from 'react';
import {Select} from "./Select";
import {ComponentMeta, ComponentStory} from "@storybook/react";



export default {
    title: 'Components/Select',
    component: Select
} as ComponentMeta<typeof Select>;


const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectCollapsed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectCollapsed.args = {
    value: ''
};


export const SelectChanging: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Select {...args} />
}

