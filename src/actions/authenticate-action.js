import { LOGIN_USER, REGISTER_USER } from '../constants/action-constants'

//LOGIN
export const setLoginResponse = (loginResponse) => ({
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
            dispatch(setLoginResponse(loginResponse))
        })
}


//REGISTER
export const setRegisterResponse = (registerResponse) => ({
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
            dispatch(setRegisterResponse(registerResponse))
        })
}



