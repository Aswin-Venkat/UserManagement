import React, { Component } from 'react'
import { InputField, Button } from '../../patterns/index'

class RegisterForm extends Component {
    render() {
        return (<div>
            <InputField label="username" name="username" type="text" />
            <InputField label="password" name="password" type="password" />
            <InputField label="confirm password" name="confirmpassword" type="confirmpassword" />
            <Button label="Sign up" type="submit" id="signup" />
        </div >)
    }
}
export default RegisterForm