import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Slider from 'material-ui/Slider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {addItem} from '../AC'
import { connect } from 'react-redux'

class NewItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    price: 0
  }

  setField = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  setPrice = event => {
    const value = (event.target.value === '') ? 0 : parseFloat(event.target.value)
    !isNaN(value) && this.setState({price: value})
  }

  add = event => {
    const config = {
      ...this.state
    }
    this.props.addItem(config)
    this.setState({
      title: '',
      description: '',
      image: '',
      price: 0
    })
  }

  render() {
    const style = {
      container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        width: '70%',
        minHeight: '400px',
        margin: 'auto',
        padding: '20px',
      },
      button: {
        marginTop: '10px',
      }
    }
    const disabled = !(this.state.title && this.state.description
                       && this.state.image && this.state.price)
    return (
      <Paper style = {style.container} zDepth={5}>
        <TextField
          id='title'
          value = {this.state.title}
          onChange={this.setField('title')}
        />
        <p>title</p>
        <TextField
          id='description'
          multiLine={true}
          rows={2}
          rowsMax={4}
          value = {this.state.description}
          onChange={this.setField('description')}
        />
        <p>description</p>
        <TextField
          id='image'
          value = {this.state.image}
          onChange={this.setField('image')}
        />
        <p>link to image</p>
        <TextField
          id='price'
          value={this.state.price}
          onChange={this.setPrice}
        />
        <p>price</p>
        <FloatingActionButton
          secondary = {disabled ? false : true}
          disabled = {disabled ? true : false}
          style = {style.button}
          onTouchTap = {this.add}
        >
          <ContentAdd />
        </FloatingActionButton>
      </Paper>
    )
  }
}

export default connect(null, {addItem})(NewItem)
