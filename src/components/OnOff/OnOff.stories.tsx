import {action} from '@storybook/addon-actions';

import {OnOff} from './OnOff';
import {useState} from "react";


const onChangeHandler = action('on or off was clicked')

export default {
    component: 'Rating'
}


export const OnMode = () => <OnOff on={true} onChange={onChangeHandler}/>
export const OffMode = () => <OnOff on={false} onChange={onChangeHandler}/>

export const ModeChanging = () => {
    const [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onChange={setOn}/>
}



