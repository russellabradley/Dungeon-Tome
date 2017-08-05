import React, { Component } from 'react'

export default class Loot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gold: this.props.gold,
      inventory: this.props.inventory
    }
  }

  render() {

    return(
      <div className="card">
        <div className="card-content black-text">
          <span className="card-title">Gold</span>
          <p>{this.props.gold}</p>
          <span className="card-title">Inventory</span>
          <p>{this.props.inventory}</p>
        </div>
      </div>
    )
  }
}
