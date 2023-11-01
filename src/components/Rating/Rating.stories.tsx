// import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Rating, RatingValueType} from './Rating';
import {useState} from "react";

// const meta: Meta<typeof Rating> = {
//     component: Rating,
// };
// export default meta;
// type Story = StoryObj<typeof Rating>;
//
// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */

const onClickHandler = action('onClick')
// export const EmptyRatingNew: Story = {
//     args: {
//        value: 0,
//         onClick:()=>{}
//     }
// };
// export const Rating1New: Story = {
//     args: {
//         value: 1,
//         onClick:()=>{}
//     }
// };
//
// export const Rating2New: Story = {
//     args: {
//         value: 2,
//         onClick:()=>{}
//     }
// };
//
// export const Rating3New: Story = {
//     args: {
//         value: 3,
//         onClick:()=>{}
//     }
// };
//
// export const Rating4New: Story = {
//     args: {
//         value: 4,
//         onClick:()=>{}
//     }
// };
//
// export const Rating5New: Story = {
//     args: {
//         value: 5,
//         onClick:()=>{}
//     }
// };
// export const SecondStory: Story = {
//     args: {
//         titleValue: 'Menu',
//         collapsed: true,
//         onChange: () => {
//         }
//     }
// };
export default {
    component: 'Rating'
}


export const EmptyRating = () => <Rating value={0} onClick={onClickHandler}/>
export const Rating1 = () => <Rating value={1} onClick={onClickHandler}/>
export const Rating2 = () => <Rating value={2} onClick={onClickHandler}/>
export const Rating3 = () => <Rating value={3} onClick={onClickHandler}/>
export const Rating4 = () => <Rating value={4} onClick={onClickHandler}/>
export const Rating5 = () => <Rating value={5} onClick={onClickHandler}/>
export const ChangeRating = () => {
    const [value,setValue]=useState<RatingValueType>(0)
    return <Rating value={value} onClick={setValue}/>
}



