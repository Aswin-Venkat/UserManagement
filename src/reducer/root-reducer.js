import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import authenticate from './authenticate-reducer'

const rootReducer = combineReducers({
    form: reduxFormReducer,
    authenticate,
})

export default rootReducer