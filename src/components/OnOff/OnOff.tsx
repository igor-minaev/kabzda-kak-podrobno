import React from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    console.log('OnOff rendering')


    const OnStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        padding: '3px',
        display: 'inline-block',
        marginRight: '10px',
        backgroundColor: props.on ? 'green' : 'white'
    }

    const OffStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        padding: '3px',
        display: 'inline-block',
        marginRight: '10px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const SwitchStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: '50%',
        padding: '3px',
        display: 'inline-block',
        marginRight: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const onClickOnHandler = () => {
        props.onChange(true)
    }
    const onClickOffHandler = () => {
        props.onChange(false)
    }
    return (
        <div style={{marginBottom: '10px'}}>
            <div style={OnStyle} onClick={onClickOnHandler}>On
            </div>
            <div style={OffStyle} onClick={onClickOffHandler}>Off
            </div>
            <div style={SwitchStyle}></div>
        </div>
    );
};

