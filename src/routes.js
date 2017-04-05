import React from 'react'
import {Router, Route, Redirect, IndexRedirect, IndexRoute} from 'react-router'
import history from './history'
import App from './RouteHandlers/App'
import ItemList from './components/ItemList'

export default (
    <Router history = {history}>
        <Route path="/" component = {App}>
            <IndexRedirect to="/items"/>
            <Route path="/items" component = {ItemList}>
            </Route>
        </Route>
    </Router>
)
