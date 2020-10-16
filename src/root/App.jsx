import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from '../view/login/login-container';
import RegisterContainer from '../view/register/register-container';
import UserContainer from '../view/user/user-container';
import * as Navigate from '../constants/route-constants';
const App = () => (
  <HashRouter>
    <Switch>
      <Route
        exact
        path={[Navigate.ROOT, Navigate.TO_HOME]}
        render={props => <LoginContainer {...props} />}
      />
      <Route
        path={Navigate.TO_REGISTER}
        render={props => <RegisterContainer {...props} />}
      />
      <Route
        path={Navigate.TO_USER}
        render={props => <UserContainer {...props} />}
      />
    </Switch>
  </HashRouter>
)
export default App