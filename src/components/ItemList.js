import React, { Component, PropTypes } from 'react'
import Item from './Item'
import { deleteItemById } from '../AC'
import { mapToArray } from '../helpers'
import { connect } from 'react-redux'

class ItemList extends Component {

  deleteItem = id => ev => {
    this.props.deleteItemById(id)
  }

  render() {
    const style = {
      container: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
      }
    }
    const items = this.props.goods.map(item => {
      const { id, title, desc, img, price } = item
      return <li key = {id}>
        <Item
          id = {id}
          title = {title}
          desc = {desc}
          img = {img}
          price = {price}
          deleteItem = {this.deleteItem}
        />
      </li>
    })

    return (
      <ul style = {style.container}>{items}</ul>
    )
  }
}

export default connect(state => {
  const goods = mapToArray(state.items)
  return {
    goods
  }
}, { deleteItemById })(ItemList)
