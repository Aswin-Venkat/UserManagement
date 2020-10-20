import React, { Component } from 'react'
import { Button } from '../../patterns/index'

const UserListForm = (props) => {

    const { userList, navigateToAddUser, deleteUserDetails } = props

    const listOfUsers = Object.keys(userList).map((key, index) =>
        <div className="user-container" key={index}>
            <div className="user-item">
                <img src={userList[key].avatar} alt="Avatar" class="avatar" />
            </div>
            <div className="user-item">
                <div className="user-item-title">Email</div>
                {userList[key].email}
            </div>
            <div className="user-item">
                <div className="user-item-title">First name</div>
                {userList[key].first_name}
            </div>
            <div className="user-item">
                <div className="user-item-title">Last name</div>
                {userList[key].last_name}
            </div>
            <div className="user-item">
                <Button label="Remove" type="button" id="delete" onClick={() => deleteUserDetails(key)} /></div>
        </div>
    )
    return (<React.Fragment>
        <div className="container">
            <div class="header">
                <div className="header-content-wrapper">
                    <h1>User management portal</h1>
                    <p><i>*Built with <b>react and redux</b> framework.</i></p>
                    <br />
                    <a onClick={navigateToAddUser}>Want to add a new user? please click here</a>
                </div>
            </div>
            <div className="page-container">
                <div className="page-form">
                    {listOfUsers}
                </div>
            </div>
        </div>
    </React.Fragment>
    )

}
export default UserListForm