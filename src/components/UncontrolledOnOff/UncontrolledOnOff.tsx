import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {
    const [on, setOn] = useState(false)
    console.log("UncontrolledOnOff rendering")
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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={switchStyle}></div>
        </div>
    );
};

