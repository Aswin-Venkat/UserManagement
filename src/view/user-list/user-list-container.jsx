import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import UserListForm from './user-list-form';
import { deleteUser } from '../../actions/user-list-action'


const UserListContainer = new reduxForm({
    form: 'user',
})(UserListForm)

const mapStatetoProps = state => ({
    userList: state.userlist.userListResponse.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addUser: () => {
        console.log("add functionality")
    },
    deleteUser: (index) => {
        dispatch(deleteUser(index))
    }
});

export default connect(mapStatetoProps, mapDispatchToProps)(UserListContainer)