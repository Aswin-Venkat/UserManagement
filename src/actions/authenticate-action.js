import { LOGIN_USER, REGISTER_USER } from '../constants/action-constants'
import { createHashHistory } from 'history'
import * as Navigate from '../constants/route-constants'
import { setUserList } from './user-list-action'
//LOGIN
export const setLogin = (loginResponse) => ({
    type: LOGIN_USER,
    payload: loginResponse
})

export const loginUser = (loginDetails) => async (dispatch) => {
    return await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
    })
        .then(
            (response) => response.json(),
            (error) => console.log("an error occured", error)
        ).then(loginResponse => {
            dispatch(setLogin(loginResponse))
            if (!loginResponse.error) {
                dispatch(getUserList())
            }
        })
}

export const getUserList = () => async (dispatch) => {
    return await fetch('https://reqres.in/api/users?per_page=12', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        (response) => response.json(),
        (error) => console.log("an error occured", error)
    ).then(userListResponse => {
        dispatch(setUserList(userListResponse))
        createHashHistory().push(Navigate.TO_USER_LIST)
    })
}

//REGISTER
export const setRegister = (registerResponse) => ({
    type: REGISTER_USER,
    payload: registerResponse
})
export const registerUser = (registerDetails) => async (dispatch) => {
    return await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": registerDetails.email, "password": registerDetails.password })
    })
        .then(
            (response) => response.json(),
            (error) => console.log("an error occured", error)
        ).then(registerResponse => {
            dispatch(setRegister(registerResponse))
            if (!registerResponse.error) {
                createHashHistory().push(Navigate.TO_LOGIN)
            }
        })
}



