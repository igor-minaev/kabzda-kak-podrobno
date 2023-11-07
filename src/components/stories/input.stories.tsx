import {action} from '@storybook/addon-actions';
import {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'Input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input onChange={onChangeHandler}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => inputRef.current && setValue(inputRef.current.value)
    return <><input ref={inputRef}/>
        <button onClick={save}>save
        </button>
        - actual value: {value}</>
}

export const ControlledInputWithFixedValue = () => <input value='it-incubator.by'/>