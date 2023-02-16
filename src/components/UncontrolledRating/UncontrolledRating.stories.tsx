import React from 'react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating
} as ComponentMeta<typeof UncontrolledRating>;

const callback = action('rating changed inside component')

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;

export const EmptyRating = Template.bind({})
EmptyRating.args = {
    defaultValue: 0,
    onChange: callback
}
export const Rating1 = Template.bind({})
Rating1.args = {
    defaultValue: 0,
    onChange: callback
}
export const Rating2 = Template.bind({})
Rating2.args = {
    defaultValue: 0,
    onChange: callback
}
export const Rating3 = Template.bind({})
Rating3.args = {
    defaultValue: 0,
    onChange: callback
}
export const Rating4 = Template.bind({})
Rating4.args = {
    defaultValue: 0,
    onChange: callback
}
export const Rating5 = Template.bind({})
Rating5.args = {
    defaultValue: 0,
    onChange: callback
}



