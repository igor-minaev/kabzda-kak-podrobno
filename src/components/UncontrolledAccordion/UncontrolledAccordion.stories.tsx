import {action} from '@storybook/addon-actions';

import UncontrolledAccordion from './UncontrolledAccordion';
import {useState} from "react";

export default {
    component: 'UncontrolledAccordion'
}

const onChangeHandler = action('onChange')


export const AccordionWithState = () => {
    return <UncontrolledAccordion titleValue='Menu'/>
}

