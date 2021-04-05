import React from 'react'
import './Content.css'
import {Switch, Route} from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/Param/:id">
                <Param />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
)
export default Content