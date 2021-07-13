import React from 'react'
import './App.css'
import ReactDOM from 'react-dom'
import { Route, Router, Switch } from 'react-router'
import LoginView from './components/authentication/Login'
import { createHashHistory } from 'history'

const history = createHashHistory()

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="">
            <LoginView/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

/**
 * @type {void}
 * */
function renderApp(): void {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  )

}

export default renderApp
