import { USER_LIST } from '../constants/action-constants'

export const setUserList = (userListResponse) => ({
    type: USER_LIST,
    payload: userListResponse
})