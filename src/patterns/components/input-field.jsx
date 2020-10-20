import React from 'react'
import { FormField } from '../index'

const InputField = (props) => {
    const { meta: { touched, error } } = props
    return (
        <FormField>
            <label>{props.label} </label>
            <input {...props.input} type={props.type} id={props.name} name={props.name} />
            { touched && error && <div className="field-error">{error}</div>}
        </FormField>
    )
}
export default InputField