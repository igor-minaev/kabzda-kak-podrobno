import React from 'react';

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    const onOffStyle = {
        margin: "10px"
    }
    const onStyle = {
        width: '30px',
        height: "20px",
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "5px",
        marginRight: "5px",
        backgroundColor: props.on ? '#07e747' : 'white',
        textAlign: "center" as const
    }
    const offStyle = {
        width: '30px',
        height: "20px",
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "5px",
        marginRight: "5px",
        backgroundColor: props.on ? 'white' : '#ee2034',
        textAlign: "center" as const
    }
    const switchStyle = {
        width: '15px',
        height: "15px",
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: props.on ? '#07e747' : '#ee2034'
    }
    return (
        <div style={onOffStyle}>
            <div onClick={()=>props.setOn(true)} style={onStyle}>On</div>
            <div onClick={()=>props.setOn(false)} style={offStyle}>Off</div>
            <div style={switchStyle}></div>
        </div>
    );
};

