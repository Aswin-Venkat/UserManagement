import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import AddUserForm from './add-user-form';
import { addUserDetails } from '../../actions/user-list-action'
import * as Navigate from '../../constants/route-constants'
import validators from '../../field-validators/validations'

const AddUserContainer = new reduxForm({
    form: 'addUser',
    validate: validators
})(AddUserForm);

const mapStatetoProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addUser: (userDetails) => {
        dispatch(addUserDetails(userDetails))
    }
});

export default connect(mapStatetoProps, mapDispatchToProps)(AddUserContainer)