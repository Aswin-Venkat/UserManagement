import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginForm from './login-form';
import { loginUser } from '../../actions/authenticate-action'
import * as Navigate from '../../constants/route-constants'
import validators from '../../field-validators/validations'

const LoginContainer = new reduxForm({
    form: 'login',
    validate: validators
})(LoginForm);

const mapStatetoProps = state => ({
    authenticateError: state.authenticate.loginResponse && state.authenticate.loginResponse.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    loginUser: (loginDetails) => {
        dispatch(loginUser(loginDetails)) //action call
    },
    navigateToRegister: () => {
        ownProps.history.push(Navigate.TO_REGISTER)
    }

});

export default connect(mapStatetoProps, mapDispatchToProps)(LoginContainer)