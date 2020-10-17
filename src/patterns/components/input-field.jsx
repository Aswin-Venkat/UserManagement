import React from 'react'

const InputField = (props) => {
    return (
        <div>
            <label>{props.label} </label>
            <input {...props.input} type={props.type} id={props.name} name={props.name} />
        </div>
    )
}
export default InputField