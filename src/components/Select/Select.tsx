import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div placeholder={'Name'}>{}</div>
            {props.items.map((i,index)=><div key={index}>{i.title}</div>)}
        </div>
    );
};

