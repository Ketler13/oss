import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'

export default ({title, desc, img, price}) => {
  const style = {
    basic: {
      display: 'block',
      width: '300px',
      minHeight: '400px',
      margin: '10px',
      padding: '20px',
    },
    img: {
      maxWidth: '250px',
      maxHeight: '250px',
    },
    price: {
      color: 'rgba(142, 68, 173,1.0)',
    }
  }
  return (
    <Paper style = {style.basic} zDepth={5}>
      <p>{title}</p>
      <img style = {style.img} src = {img}/>
      <p>{desc}</p>
      <p style = {style.price}>${price}</p>
    </Paper>
  )
}
