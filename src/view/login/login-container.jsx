import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginForm from './login-form';


const LoginPageContainer = new reduxForm({
    form: 'login'
})(LoginForm);

const mapStatetoProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStatetoProps, mapDispatchToProps)(LoginPageContainer)