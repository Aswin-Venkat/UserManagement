import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import LoginContainer from '../view/login/login-container'
import RegisterContainer from '../view/register/register-container'
import UserListContainer from '../view/user-list/user-list-container'
import AddUserContainer from '../view/add-user/add-user-container'
import * as Navigate from '../constants/route-constants'

const Routes = (props) => (
    <HashRouter>
        <Switch>
            <Route
                exact={props.isLoggedIn}
                path={[Navigate.ROOT, Navigate.TO_LOGIN]}
                render={props => <LoginContainer {...props} />}
            />
            {props.isLoggedIn &&
                <React.Fragment>
                    <Route
                        path={Navigate.TO_REGISTER}
                        render={props => <RegisterContainer {...props} />}
                    />
                    <Route
                        path={Navigate.TO_USER_LIST}
                        render={props => <UserListContainer {...props} />}
                    />
                    <Route
                        path={Navigate.TO_ADD_USER}
                        render={props => <AddUserContainer {...props} />}
                    />
                </React.Fragment>}
        </Switch>
    </HashRouter>
)
export default Routes