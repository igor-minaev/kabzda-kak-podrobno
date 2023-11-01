import {action} from '@storybook/addon-actions';

import {UncontrolledOnOff} from './UncontrolledOnOff';


const onChangeHandler = action('on or off was clicked')

export default {
    component: 'Rating'
}


export const OnMode = () => {
    return <UncontrolledOnOff defaultOn={true} onChange={onChangeHandler}/>
}
export const OffMode = () => {
    return <UncontrolledOnOff defaultOn={false} onChange={onChangeHandler}/>
}




