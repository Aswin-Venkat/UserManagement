import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginForm from './login-form';


const LoginPageContainer = new reduxForm({
    form: 'loginpageform'
})(LoginForm);

const mapStatetoProps = state => ({

});

const mapDispatchToProps = (dispach, ownProps) => ({

});

export default connect(mapStatetoProps, mapDispatchToProps)(LoginPageContainer)