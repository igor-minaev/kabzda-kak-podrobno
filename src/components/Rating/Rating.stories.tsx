import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'Components/Rating',
    component: Rating
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({})
EmptyRating.args = {
    value: 0,
    onClick: x => x
}
export const Rating1 = Template.bind({})
Rating1.args = {
    value: 1,
    onClick: x => x
}
export const Rating2 = Template.bind({})
Rating2.args = {
    value: 2,
    onClick: x => x
}
export const Rating3 = Template.bind({})
Rating3.args = {
    value: 3,
    onClick: x => x
}
export const Rating4 = Template.bind({})
Rating4.args = {
    value: 4,
    onClick: x => x
}
export const Rating5 = Template.bind({})
Rating5.args = {
    value: 5,
    onClick: x => x
}


export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value={rating} onClick={setRating}/>
}