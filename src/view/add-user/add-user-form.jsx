import React, { Component } from 'react'
import { InputField, Button } from '../../patterns/index'
import formFields from '../../json/form-field-controls.json'
import { Field } from 'redux-form'

class AddUserForm extends Component {
    addUserSubmit = (userDetails) => {
        const { addUser } = this.props
        addUser(userDetails)
    }
    render() {
        const { handleSubmit } = this.props
        const addUserFields = Object.keys(formFields.addUser).map(
            index => <Field
                key={index}
                name={formFields.addUser[index].name}
                type={formFields.addUser[index].type}
                className={formFields.addUser[index].className}
                placeholder={formFields.addUser[index].placeholder}
                title={formFields.addUser[index].title}
                label={formFields.addUser[index].label}
                component={InputField} />
        )

        return (<React.Fragment>
            <form onSubmit={handleSubmit(this.addUserSubmit)}>
                {addUserFields}
                <Button label="Add user" type="submit" id="adduser" />
            </form>
        </React.Fragment>)
    }
}
export default AddUserForm