import React, { Component } from 'react'
import { connect } from 'react-redux'
import Routes from './routes'
import { createHashHistory } from 'history'
import * as Navigate from '../constants/route-constants'

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    !this.props.isLoggedIn && createHashHistory().push(Navigate.ROOT)
  }

  render() {
    return (
      <React.Fragment>
        <Routes isLoggedIn={this.props.isLoggedIn} />
      </React.Fragment>
    )
  }
}

const mapStatetoProps = state => ({
  isLoggedIn: state.authenticate.isLoggedIn
})

export default connect(mapStatetoProps)(App)