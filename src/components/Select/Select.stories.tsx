import React, {useState} from 'react';
import {Select} from "./Select";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Components/Select',
    component: Select
} as ComponentMeta<typeof Select>;



export const WithValue: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState('2')
    return <Select value={value} onChange={setValue} items={[
        {value:'1',title:'Minsk'},
        {value:'2',title:'Moscow'},
        {value:'3',title:'Kiev'},
    ]}/>
}

export const WithoutValue: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState(null)
    return <Select value={value} onChange={setValue} items={[
        {value:'1',title:'Minsk'},
        {value:'2',title:'Moscow'},
        {value:'3',title:'Kiev'},
    ]}/>
}

