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
        const { handleSubmit, navigateToRegister } = this.props
        const loginFields = Object.keys(formFields.login).map(
            (key, index) => <Field
                key={key}
                name={formFields.login[key].name}
                type={formFields.login[key].type}
                className={formFields.login[key].className}
                placeholder={formFields.login[key].placeholder}
                title={formFields.login[key].title}
                label={formFields.login[key].label}
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
                        <Button label="Register" type="register" id="register" onClick={navigateToRegister} />
                    </form>
                </div>
            </div>
        </React.Fragment>)
    }
}
export default LoginForm