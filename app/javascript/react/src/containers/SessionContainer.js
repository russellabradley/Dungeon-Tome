import React from 'react';
import { Link } from 'react-router-dom';

import SessionTile from '../components/SessionTile';
import SessionCreatorContainer from './SessionCreator';


class SessionContainer extends React.Component {
  constructor(props) {
    super(props)

    this.createSession = this.createSession.bind(this);
  }


  createSession(sessionData) {
    event.preventDefault();
    fetch(`/api/v1/campaigns/${this.props.campaignId}/sessions`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      },
      method: 'POST',
      body: JSON.stringify({
        session: sessionData
      })
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((response) => response.json())
    .then(responseData => {
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    let sessionTiles = this.props.sessionList.map(s => {
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

    let sessionCreatorContainer = <SessionCreatorContainer
                                    campaignId={this.props.campaignId}
                                    createSession={this.createSession}
                                  />

    return(
      <div>
        {sessionCreatorContainer}
        {sessionTiles}
      </div>
    )
  }
}

export default SessionContainer;
