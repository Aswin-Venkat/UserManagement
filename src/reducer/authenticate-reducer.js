import { LOGIN_USER, REGISTER_USER } from "../constants/action-constants"

const initialState = {
    username: undefined,
    password: undefined,
    loggedIn: false,
}

export default function authenticate(state = initialState, action = '') {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                loginResponse: action.payload,
                isLoggedIn: true
            }
        }

        case REGISTER_USER: {
            return {
                ...state,
                registerResponse: action.payload,
            }
        }

        default:
            return state
    }
}