import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: PropsType) => {
    console.log('OnOff rendering')

    const [on, setOn] = useState(false)

    console.log(on)

    const OnStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        padding: '3px',
        display: 'inline-block',
        marginRight: '10px',
        backgroundColor: on ? 'green' : 'white'
    }

    const OffStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        padding: '3px',
        display: 'inline-block',
        marginRight: '10px',
        backgroundColor: on ? 'white' : 'red'
    }
    const SwitchStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: '50%',
        padding: '3px',
        display: 'inline-block',
        marginRight: '10px',
        backgroundColor: on ? 'green' : 'red'
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
        <div style={{marginBottom: '10px'}}>
            <div style={OnStyle} onClick={onClicked}>On
            </div>
            <div style={OffStyle} onClick={offClicked}>Off
            </div>
            <div style={SwitchStyle}></div>
        </div>
    );
};

