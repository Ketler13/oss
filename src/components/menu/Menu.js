import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import Toggle from 'material-ui/Toggle'
import { changeRole } from '../../AC'
import { connect } from 'react-redux'

function Menu(props) {
  const items = React.Children.map(props.children, (child, i) => {
    return (
      <MenuItem key = {i}>
        {child}
      </MenuItem>
    )
  })

  const changeRole = () => {
    props.changeRole()
  }

  return (
    <AppBar
      iconElementLeft = {
        <IconMenu
          iconButtonElement={<IconButton><MenuIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
            {items}
        </IconMenu>
      }
      title="Beast Shop"
      iconElementRight = {
        <Toggle
          label = {props.isAdmin ? 'Log Out' : 'Log In'}
          labelPosition = 'right'
          style={{margin: 20}}
          onToggle={changeRole}
        />
      }
    >
    </AppBar>
  )
}

export default connect(state => {
  return {
    isAdmin: state.roles.isAdmin
  }
}, { changeRole })(Menu)
