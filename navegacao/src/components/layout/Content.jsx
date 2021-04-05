import React from 'react'
import './Content.css'
import {Switch, Route} from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
        </Switch>
    </main>
)
export default Content