import React from 'react';
import { Link } from 'react-router-dom';

import SessionTile from '../components/SessionTile';


class SessionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignId: this.props.campaignId
    }
  }


  render(){
    let sessions
    sessions = this.props.sessions.map(s => {
      return(
        <SessionTile
          key={s.id}
          id={s.id}
          sessionNum={s.id}
          sessionTitle={s.title}
          sessionDate={s.date}
          sessionNotes={s.notes}
        />
      )
    })


    return(
      <div className="container">
        {sessions}
      </div>
    )
  }
}

export default SessionContainer;
