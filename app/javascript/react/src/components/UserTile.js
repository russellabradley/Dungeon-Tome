import React from 'react'

const UserTile = props => {
  return(
    <div className="user-tile">
      <p>{props.email}</p>
      <button className="btn blue lighten-2 disabled">Add</button>
    </div>
  )
}

export default UserTile;
