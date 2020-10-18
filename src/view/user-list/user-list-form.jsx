import React, { Component } from 'react'
import { Button } from '../../patterns/index'

const UserListForm = (props) => {

    const { userList, addUser, deleteUser } = props

    const listOfUsers = Object.keys(userList).map((key, index) =>
        <div key={index}>
            {userList[key].email}
            {userList[key].first_name}
            {userList[key].last_name}
            <Button label="delete" type="button" id="delete" onClick={() => deleteUser(key)} />
        </div>
    )
    return (<React.Fragment>
        {listOfUsers}
        <Button label="add" type="button" id="add" onClick={addUser} />
    </React.Fragment>
    )

}
export default UserListForm