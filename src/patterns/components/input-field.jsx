import React from 'react'

const InputField = (props) => {
    const { meta: { touched, error } } = props
    return (
        <div>
            <label>{props.label} </label>
            <input {...props.input} type={props.type} id={props.name} name={props.name} />
            { touched && error && <div>{error}</div>}
        </div>
    )
}
export default InputField