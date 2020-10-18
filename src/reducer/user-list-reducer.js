import { USER_LIST, DELETE_USER, ADD_USER } from "../constants/action-constants"

const initialState = {
    userListResponse: undefined
}

const removeUser = (userList, index) => {
    let updatedUserList = userList.slice()
    updatedUserList.splice(index, 1)
    return updatedUserList
}

// retrieve, delete and add user list
export default function userList(state = initialState, action = {}) {
    switch (action.type) {
        case USER_LIST: {
            return {
                ...state,
                userListResponse: action.payload,
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                userListResponse: {
                    ...state.userListResponse,
                    data: removeUser(state.userListResponse.data, action.payload)
                }
            }
        }
        case ADD_USER: {
            console.log(action.payload)
            return {
                ...state,
                userListResponse: {
                    ...state.userListResponse,
                    data: [...state.userListResponse.data, action.payload]
                }
            }
        }
        default:
            return state
    }
}

