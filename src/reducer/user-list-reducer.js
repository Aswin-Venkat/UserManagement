import { USER_LIST } from "../constants/action-constants"

const initialState = {
    userListResponse: undefined
}

export default function userList(state = initialState, action = '') {
    switch (action.type) {
        case USER_LIST: {
            return {
                ...state,
                userListResponse: action.payload,
            }
        }
        default:
            return state
    }
}