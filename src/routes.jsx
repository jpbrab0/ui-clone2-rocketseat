import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Menu from './Pages/Menu/index'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Menu} />
            </Switch>
    </ BrowserRouter>
    )
}