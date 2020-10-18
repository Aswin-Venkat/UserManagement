import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import UserListForm from './user-list-form';
import { deleteUserDetails } from '../../actions/user-list-action'
import * as Navigate from '../../constants/route-constants'

const UserListContainer = new reduxForm({
    form: 'user',
})(UserListForm)

const mapStatetoProps = state => ({
    userList: state.userlist.userListResponse.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    navigateToAddUser: () => {
        ownProps.history.push(Navigate.TO_ADD_USER)
    },
    deleteUserDetails: (index) => {
        dispatch(deleteUserDetails(index))
    }
});

export default connect(mapStatetoProps, mapDispatchToProps)(UserListContainer)