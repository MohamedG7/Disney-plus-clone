import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginUser from '../Components/LoginUser'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Detail from '../Components/Detail'

function DisneyClone() {
    return (
        <div>
            <Router>
              <Header />
              <Switch>
                <Route path = "/home">
                   <Home />
                </Route>
                <Route path = "/detail/:id">
                   <Detail />
                </Route>
                <Route path = "/">
                   <LoginUser />
                </Route>
              </Switch>
            </Router>
        </div>
    )
}

export default DisneyClone
