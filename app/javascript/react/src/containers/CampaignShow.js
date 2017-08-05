import React from 'react';

import SessionContainer from './SessionContainer';
import SessionTile from '../components/SessionTile';
import Loot from '../components/Loot';


class CampaignShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignObj: null,
      lootObj: null,
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
      debugger;
      this.setState({
        campaignObj: responseData.campaign,
        lootObj: responseData.loot,
        questsArray: responseData.quests,
        sessionsArray: responseData.sessions,
        charactersArray: responseData.characters})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  render() {

    let titleText
    let taglineText
    let descriptionText
    if (this.state.campaignObj) {
      titleText = this.state.campaignObj.title
      taglineText = this.state.campaignObj.tagline
      descriptionText = this.state.campaignObj.description
    }

    let sessions
    sessions = this.state.sessionsArray.map((s, i) => {
      return(
        <SessionTile
          key={s.id}
          sessionNum={i+1}
          sessionTitle={s.title}
          sessionDate={s.date}
          sessionNotes={s.notes}
        />
      )
    })

    let loot
    if (this.state.lootObj) {
      loot = <Loot
              inventory={this.state.lootObj.inventory}
              gold={this.state.lootObj.gold}
            />
    }


    return(
      <div>
        <div className="deep-purple">
          <div className="container">
            <div className="row">
              <div className="col s12 m6 white-text">
                <h4>{titleText}</h4>
                <p>{taglineText}</p>
                <blockquote>{descriptionText}</blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {sessions}
            {loot}
          </div>
        </div>
      </div>
    )
  }
}

export default CampaignShow;
