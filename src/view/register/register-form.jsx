import React, { Component } from 'react'
import { InputField, Button } from '../../patterns/index'
import formFields from '../../json/form-field-controls.json'
import { Field } from 'redux-form'

class RegisterForm extends Component {
    registerSubmit = (registerDetails) => {
        const { registerUser } = this.props
        registerUser(registerDetails)
    }
    render() {
        const { handleSubmit } = this.props
        const registerFields = Object.keys(formFields.register).map(
            index => <Field
                key={index}
                name={formFields.register[index].name}
                type={formFields.register[index].type}
                className={formFields.register[index].className}
                placeholder={formFields.register[index].placeholder}
                title={formFields.register[index].title}
                label={formFields.register[index].label}
                component={InputField} />
        )

        return (<React.Fragment>
            <form onSubmit={handleSubmit(this.registerSubmit)}>
                {registerFields}
                <Button label="Sign up" type="submit" id="signup" />
            </form>
        </React.Fragment>)
    }
}
export default RegisterForm