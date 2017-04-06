import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import ContentClear from 'material-ui/svg-icons/content/clear'

export default ({title, description, image, price, id, deleteItem, isAdmin}) => {
  const style = {
    container: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      position: 'relative',
      width: '300px',
      minHeight: '400px',
      margin: '10px',
      padding: '20px',
    },
    img: {
      maxWidth: '250px',
      maxHeight: '250px',
      margin: '5px 0'
    },
    price: {
      color: 'rgba(142, 68, 173,1.0)',
      paddingTop: '10px',
      fontSize: '18px',
    },
    button: {
      display: 'block',
      position: 'absolute',
      top: '-5px',
      left: '250px',
    }
  }
  return (
    <Paper style = {style.container} zDepth={5}>
      {
        isAdmin ?
        <IconButton
          style = {style.button}
          onTouchTap = {deleteItem(id)}
        >
          <ContentClear />
        </IconButton> :
        null
      }

      <p>{title}</p>
      <img style = {style.img} src = {image}/>
      <p>{description}</p>
      <p style = {style.price}>${price}</p>
    </Paper>
  )
}
