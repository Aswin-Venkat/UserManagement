import { USER_LIST, DELETE_USER } from '../constants/action-constants'

export const setUserList = (userListResponse) => ({
    type: USER_LIST,
    payload: userListResponse
})

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id
})