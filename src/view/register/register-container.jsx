import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { registerUser } from '../../actions/authenticate-action'
import RegisterForm from './register-form';


const RegisterPageContainer = new reduxForm({
    form: 'register'
})(RegisterForm);

const mapStatetoProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    registerUser: (registerDetails) => {
        dispatch(registerUser(registerDetails)) //action call
    }

});

export default connect(mapStatetoProps, mapDispatchToProps)(RegisterPageContainer)