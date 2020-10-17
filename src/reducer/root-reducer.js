import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import authenticate from './authenticate-reducer'
import userlist from './user-list-reducer'

const rootReducer = combineReducers({
    form: reduxFormReducer,
    authenticate,
    userlist
})

export default rootReducer