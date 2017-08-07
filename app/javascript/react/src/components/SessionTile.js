import React from 'react';
import { Link } from 'react-router-dom'


const SessionTile = props => {

  return(
    <div>
      <div className="card">
        <div className="card-content black-text">
          <p className="grey-text text-lighten-1">{props.sessionDate}</p>
          <span className="card-title">{props.sessionNum}. <strong>{props.sessionTitle}</strong></span>
          <blockquote>{props.sessionNotes}</blockquote>
        </div>
      </div>
    </div>
  )
}

export default SessionTile;

// <div className="card-action">
// <a>Edit</a>
// </div>
