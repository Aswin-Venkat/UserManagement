import React, { Component } from 'react'
import { InputField, Button } from '../../patterns/index'

class LoginForm extends Component {
    render() {
        return (<div>
            <InputField label="username" name="username" type="text" />
            <InputField label="password" name="password" type="password" />
            <a href="=">Forgot Password</a>
            <Button label="Sign in" type="submit" id="signin" />
            <br />
            <hr />
            <Button label="Register" type="register" id="register" />

        </div >)
    }
}
export default LoginForm