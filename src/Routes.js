import React, {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import View from "./components/View/View.js";


const Routes = props => {
    return (
        <Switch>
            <Route path='/' component={View} />
            {/* <Route path='/admin' component={AdminView} /> */}
            {/* <Route path='/' component={View} />
            <Route path='/' component={View} /> */}
        </Switch>
    )
}

export default Routes