import React from 'react'

const UserTile = props => {
  return(
    <div className="card black-text">
      <p>{props.email}<button className="btn blue lighten-2">Add</button></p>
    </div>
  )
}

export default UserTile;
