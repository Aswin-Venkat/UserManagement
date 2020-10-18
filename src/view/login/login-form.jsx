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
        const { handleSubmit, navigateToRegister, authenticateError } = this.props
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
                    {authenticateError &&
                        <span>{authenticateError}. Try with test data email as janet.weaver@reqres.in and password as test123</span>}
                    <form onSubmit={handleSubmit(this.loginSubmit)}>
                        {loginFields}
                        <a href="=">Forgot Password</a>
                        <Button label="Sign in" type="submit" id="signin" />
                        <br />
                        <hr />
                    </form>
                    <Button label="Register" type="button" id="register" onClick={navigateToRegister} />
                </div>
            </div>
        </React.Fragment>)
    }
}
export default LoginForm