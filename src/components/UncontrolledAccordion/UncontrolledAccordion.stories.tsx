import React from 'react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";
import {ComponentMeta, ComponentStory} from "@storybook/react";



export default {
    title: 'Components/UncontrolledAccordion',
    component: UncontrolledAccordion
} as ComponentMeta<typeof UncontrolledAccordion>;

const callback = action('accordion mode change event fired')

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const ModeChanging = Template.bind({})
ModeChanging.args = {
    titleValue: 'Menu'
}


