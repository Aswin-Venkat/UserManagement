import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RegisterForm from './register-form';


const RegisterPageContainer = new reduxForm({
    form: 'register'
})(RegisterForm);

const mapStatetoProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStatetoProps, mapDispatchToProps)(RegisterPageContainer)