import React from 'react';

import SessionContainer from './SessionContainer';
import SessionTile from '../components/SessionTile';


class CampaignShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignObj: null,
      lootArray: [],
      questsArray: [],
      sessionsArray: [],
      charactersArray: [],
      showDescription: false
    }
  }

  componentDidMount() {
    // fetch the data for this campaign from the api
    fetch(`/api/v1/campaigns/${this.props.match.params.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      }
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
    .then((responseData) => {
      this.setState({
        campaignObj: responseData.campaign,
        lootArray: responseData.loot,
        questsArray: responseData.quests,
        sessionsArray: responseData.sessions,
        charactersArray: responseData.characters})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  render(){

    let titleText
    let taglineText
    let descriptionText
    if (this.state.campaignObj) {
      titleText = this.state.campaignObj.title
      taglineText = this.state.campaignObj.tagline
      descriptionText = this.state.campaignObj.description
    }

    // let sessions
    // if (this.state.campaignObj) {
    //   let sessions =
    //     <SessionContainer
    //       sessions={this.state.sessionsArray}
    //     />
    // }

    let sessions
    sessions = this.state.sessionsArray.map(s => {
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
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h2>{titleText}</h2>
              <p>{taglineText}</p>
              <blockquote>{descriptionText}</blockquote>
            </div>
          </div>
        </div>
        {sessions}
      </div>
    )
  }
}

export default CampaignShow;
