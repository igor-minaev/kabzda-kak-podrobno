import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {ComponentMeta, ComponentStory} from "@storybook/react";



export default {
    title: 'Components/UncontrolledOnOff',
    component: UncontrolledOnOff
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action('on or off clicked')

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

export const OnMode = Template.bind({})
OnMode.args = {
    defaultOn: true,
    onChange: callback
}

export const OffMode = Template.bind({})
OffMode.args = {
    defaultOn: false,
    onChange: callback
}



