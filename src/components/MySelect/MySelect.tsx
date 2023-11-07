import React from "react";

type ItemType = {
    title: string
    value: any
}

type MySelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function MySelect(props: MySelectPropsType) {
    return (
        <div>
            <div>{}</div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )
}
