import React, { Component } from 'react'

export default class MyButton extends Component {
  render() {
      const theBtnClass = "btn " + this.props.theBtnClass
    return (
      <div>
        <button 
        onClick={this.props.onClick} 
        value={this.props.value}  
        className={theBtnClass}>
            {this.props.name}
        </button>
      </div>
    )
  }
}
