import React, { Component, PropTypes } from 'react'
import Item from './Item'
import { deleteItemById, getFromStorage } from '../AC'
import { mapToArray } from '../helpers'
import { connect } from 'react-redux'

class ItemList extends Component {

  componentDidMount() {
    this.props.getFromStorage()
  }

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
      const { id, title, description, image, price } = item
      return <li key = {id}>
        <Item
          id = {id}
          title = {title}
          description = {description}
          image = {image}
          price = {price}
          deleteItem = {this.deleteItem}
          isAdmin = {this.props.isAdmin}
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
    isAdmin: state.roles.isAdmin,
    goods
  }
}, { deleteItemById, getFromStorage })(ItemList)
