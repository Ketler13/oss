import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import routes from './routes'

// ReactDOM.render(
//     <Provider store = {store}>
//         <AppContainer />
//     </Provider>, document.getElementById('container'))

ReactDOM.render(routes, document.getElementById('container'))