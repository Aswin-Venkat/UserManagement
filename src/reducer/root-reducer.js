import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import login from './login-reducer'

const rootReducer = combineReducers({
    form: reduxFormReducer,
    login,
})

export default rootReducer