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
                <div class="header">
                    <div className="header-content-wrapper">
                        <h1>User management portal</h1>
                        <p><i>*Built with <b>react and redux</b> framework.</i></p>
                    </div>
                </div>
                <div className="page-container">
                    <div className="page-form">
                        {authenticateError &&
                            <div class="alert">
                                <strong>{authenticateError}! - </strong>Try with test data email as janet.weaver@reqres.in and password as test123
                            </div>
                        }
                        <div className="form-fields">
                            <div className="page-title">Sign in</div>
                            <hr />
                            <form onSubmit={handleSubmit(this.loginSubmit)}>
                                {loginFields}
                                <a href="=">Forgot Password?</a>
                                <br />
                                <hr />
                                <Button label="Sign in" type="submit" id="signin" />
                            </form>
                            <br />
                            <p>If you dont have an account please register by clicking below</p>
                            <Button label="Register" type="button" id="register" onClick={navigateToRegister} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>)
    }
}
export default LoginForm