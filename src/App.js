import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from './actions/shared'
import Home from './components/Home'
import Nav from './components/Nav'
import PageNotFound from './components/PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './font.css'


class App extends Component {
  //load initial data
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    
  }

  render() {
    return (
      <Router>

        <Fragment>
            <LoadingBar style={{ backgroundColor: '#426BFD' }} />     
            <Home/>
        </Fragment>
      </Router>

    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    loggedIn: authedUser !== null
  }
}
export default connect(mapStateToProps)(App)
