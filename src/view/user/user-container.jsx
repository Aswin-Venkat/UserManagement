import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import UserForm from './user-form';


const UserPageContainer = new reduxForm({
    form: 'userpageform'
})(UserForm);

const mapStatetoProps = state => ({

});

const mapDispatchToProps = (dispach, ownProps) => ({

});

export default connect(mapStatetoProps, mapDispatchToProps)(UserPageContainer)