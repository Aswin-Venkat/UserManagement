import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { registerUser } from '../../actions/authenticate-action'
import RegisterForm from './register-form';
import validators from '../../field-validators/validations'

const RegisterPageContainer = new reduxForm({
    form: 'register',
    validate: validators
})(RegisterForm);

const mapStatetoProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    registerUser: (registerDetails) => {
        dispatch(registerUser(registerDetails)) //action call
    }

});

export default connect(mapStatetoProps, mapDispatchToProps)(RegisterPageContainer)