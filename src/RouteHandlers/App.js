import React, { Component, PropTypes } from 'react'
import store from '../store'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'
import ControlPanel from '../components/ControlPanel'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default function App(props) {
    const style = {
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        minHeight: '100vh',
    }
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Provider store = {store}>
                <Paper style = {style} zDepth={1}>
                    <Menu>
                        <MenuItem name = "Items" path="/items"/>
                        <MenuItem name = "Add item" path="/add"/>
                    </Menu>
                    <ControlPanel />
                    {props.children}
                </Paper>
            </Provider>
        </MuiThemeProvider>
    )
}
