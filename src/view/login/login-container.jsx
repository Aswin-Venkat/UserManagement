import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginForm from './login-form';
import { loginUser } from '../../actions/authenticate-action'
import * as Navigate from '../../constants/route-constants'

const LoginPageContainer = new reduxForm({
    form: 'login'
})(LoginForm);

const mapStatetoProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

    loginUser: (loginDetails) => {
        dispatch(loginUser(loginDetails)) //action call
    },
    navigateToRegister: () => {
        ownProps.history.push(Navigate.TO_REGISTER)
    }

});

export default connect(mapStatetoProps, mapDispatchToProps)(LoginPageContainer)