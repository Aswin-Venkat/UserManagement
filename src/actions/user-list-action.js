import { USER_LIST, DELETE_USER, ADD_USER } from '../constants/action-constants'
import { createHashHistory } from 'history'
import * as Navigate from '../constants/route-constants'

export const setUserList = (userListResponse) => ({
    type: USER_LIST,
    payload: userListResponse
})

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id
})


export const addUser = (userDetails) => ({
    type: ADD_USER,
    payload: userDetails
})


export const deleteUserDetails = (id) => async (dispatch) => {
    return await fetch('https://reqres.in/api/users/' + id, {
        method: 'DELETE'
    })
        .then(
            (error) => console.log("an error occured", error)
        ).then(deleteResponse => {
            dispatch(deleteUser(id))
        })
}

export const addUserDetails = (userDetails) => async (dispatch) => {
    return await fetch('https://reqres.in/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    })
        .then(
            (response) => response.json(),
            (error) => console.log("an error occured", error)
        ).then((addUserResponse) => {
            dispatch(addUser(addUserResponse))
            createHashHistory().push(Navigate.TO_USER_LIST)
        })
}