import React, {useState} from 'react';

type OnOffPropsType = {
}

export const OnOff2 = (props: OnOffPropsType) => {
    const [on, setOn] = useState(false)
    console.log("OnOff2 rendering")
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
        backgroundColor: on ? '#07e747' : 'white',
        textAlign: "center" as const
    }
    const offStyle = {
        width: '30px',
        height: "20px",
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "5px",
        marginRight: "5px",
        backgroundColor: on ? 'white' : '#ee2034',
        textAlign: "center" as const
    }
    const switchStyle = {
        width: '15px',
        height: "15px",
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: on ? '#07e747' : '#ee2034'
    }
    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={switchStyle}></div>
        </div>
    );
};

