
import {action} from '@storybook/addon-actions';

import {UncontrolledRating} from './UncontrolledRating';
import {useState} from "react";



const onClickHandler = action('onClick')

export default {
    component: 'UncontrolledRating'
}


export const UncontrolledMode = () => {
    return <UncontrolledRating />
}



