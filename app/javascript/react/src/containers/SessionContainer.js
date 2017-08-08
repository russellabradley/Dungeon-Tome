import React from 'react';
import { Link } from 'react-router-dom';

import SessionTile from '../components/SessionTile';
import SessionCreatorContainer from './SessionCreator';


class SessionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sessions: this.props.sessionList,
    }

    this.createSession = this.createSession.bind(this);
  }


  // POST fetch to create new session
  createSession(sessionData) {
    event.preventDefault();
    fetch(`/api/v1/campaigns/${this.props.campaignId}/sessions`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      method: 'POST',
      body: JSON.stringify({
        session: sessionData // Adds session{} key to data being sent
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
      // Figure out how to add submitted session to list of sessions...
      this.setState({sessions: [responseData.session, ...this.state.sessions]})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    let sessionNumbers = this.state.sessions.length+1
    let sessionTiles = this.state.sessions.map(s => {
      sessionNumbers = sessionNumbers-1;
      return(
        <SessionTile
          key={s.id}
          id={s.id}
          sessionNum={sessionNumbers}
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
        <p></p>
        {sessionCreatorContainer}
        {sessionTiles}
      </div>
    )
  }
}

export default SessionContainer;
