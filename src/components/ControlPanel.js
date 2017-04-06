import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import {deleteAllItems} from '../AC'
import { mapToArray } from '../helpers'
import {connect} from 'react-redux'

const ControlPanel = ({goods, isAdmin, deleteAllItems}) => {
  let totalPrice = 0
  let numberOfItems = 0
  let averagePrice

  goods.forEach(item => {
    totalPrice += +item.price
    numberOfItems += 1
  })

  averagePrice = !isNaN(totalPrice / numberOfItems) ?
                  (totalPrice / numberOfItems).toFixed(2) :0

  const style = {
    container: {
      display: 'flex',
      flexFlow: 'row nowrap',
      minHeight: '35px',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '5px',
    },
    button: {
      marginLeft: '20px'
    }
  }

  return (
    <Paper style = {style.container}>
      <p>
        There are {numberOfItems} items in catalog.
        Total price: {totalPrice}.
        Average price: {averagePrice}
      </p>
      {
        isAdmin ?
        <FlatButton
          label = 'Delete all'
          disabled = {!goods.length}
          secondary = {true}
          onTouchTap = {deleteAllItems}
        /> :
        null
      }

    </Paper>
  )
}

export default connect(state => {
  const goods = mapToArray(state.items)
  return {
    isAdmin: state.roles.isAdmin,
    goods
  }
}, {deleteAllItems})(ControlPanel)
