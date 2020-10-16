import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import UserForm from './user-form';


const UserPageContainer = new reduxForm({
    form: 'user'
})(UserForm);

const mapStatetoProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStatetoProps, mapDispatchToProps)(UserPageContainer)