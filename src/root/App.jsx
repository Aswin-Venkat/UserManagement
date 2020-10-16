import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from '../view/login/login'
const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  </HashRouter>
)
export default App