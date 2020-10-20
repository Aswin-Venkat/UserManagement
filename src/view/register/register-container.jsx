import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { registerUser } from '../../actions/authenticate-action'
import RegisterForm from './register-form';
import validators from '../../field-validators/validations'
import * as Navigate from '../../constants/route-constants'

const RegisterPageContainer = new reduxForm({
    form: 'register',
    validate: validators
})(RegisterForm);

const mapStatetoProps = state => ({
    registerError: state.authenticate.registerResponse && state.authenticate.registerResponse.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    registerUser: (registerDetails) => {
        dispatch(registerUser(registerDetails)) //action call
    },

    goBack: () => {
        ownProps.history.push(Navigate.TO_LOGIN);
    }

});

export default connect(mapStatetoProps, mapDispatchToProps)(RegisterPageContainer)