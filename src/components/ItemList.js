import React, { Component, PropTypes } from 'react'
import { goods } from '../items'
import Item from './Item'

export default class ItemList extends Component {
  render() {
    const style = {
      container: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
      }
    }
    const items = goods.map(item => {
      const { id, title, desc, img, price } = item
      return <li key = {id}>
        <Item
          title = {title}
          desc = {desc}
          img = {img}
          price = {price}
        />
      </li>
    })

    return (
      <ul style = {style.container}>{items}</ul>
    )
  }
}
