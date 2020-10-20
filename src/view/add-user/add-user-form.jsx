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
            <div className="container">
                <div class="header">
                    <div className="header-content-wrapper">
                        <h1>User management portal</h1>
                        <p><i>*Built with <b>react and redux</b> framework.</i></p>
                    </div>
                </div>
                <div className="page-container">
                    <div className="page-form">
                        <div className="form-fields">
                            <div className="page-title">Add new user</div>
                            <hr />
                            <form onSubmit={handleSubmit(this.addUserSubmit)}>
                                {addUserFields}
                                <hr />
                                <Button label="Add user" type="submit" id="adduser" />
                                <Button label="Go back" type="button" id="back" onClick={this.props.goBack} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>)
    }
}
export default AddUserForm