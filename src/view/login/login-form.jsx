import React, { Component } from 'react'
import { InputField, Button } from '../../patterns/index'
import formFields from '../../json/form-field-controls.json'
import { Field } from 'redux-form'

class LoginForm extends Component {

    loginSubmit = (loginDetails) => {
        const { loginUser } = this.props
        loginUser(loginDetails)
    }
    render() {
        const { handleSubmit } = this.props
        const loginFields = Object.keys(formFields.login).map(
            index => <Field
                name={formFields.login[index].name}
                type={formFields.login[index].type}
                className={formFields.login[index].className}
                placeholder={formFields.login[index].placeholder}
                title={formFields.login[index].title}
                label={formFields.login[index].label}
                component={InputField} />
        )
        return (<React.Fragment>
            <div className="container">
                <div className="column is-12">
                    <form onSubmit={handleSubmit(this.loginSubmit)}>
                        {loginFields}
                        <a href="=">Forgot Password</a>
                        <Button label="Sign in" type="submit" id="signin" />
                        <br />
                        <hr />
                        <Button label="Register" type="register" id="register" />
                    </form>
                </div>
            </div>
        </React.Fragment>)
    }
}
export default LoginForm