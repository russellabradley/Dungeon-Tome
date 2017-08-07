import React from 'react';

import UserSearch from './UserSearch'
import SessionContainer from './SessionContainer';
import SessionTile from '../components/SessionTile';
import Loot from '../components/Loot';


class CampaignShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignObj: null,
      lootObj: null,
      questsArray: null,
      sessionsArray: null,
      charactersArray: null,
      showDescription: false
    }
    this.redirectToCampaigns = this.redirectToCampaigns.bind(this);
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
        lootObj: responseData.campaign.loots[0],
        questsArray: responseData.campaign.quests,
        sessionsArray: responseData.campaign.sessions,
        charactersArray: responseData.campaign.characters})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  // Redirects to campaigns index page
  redirectToCampaigns() {
    return(
      this.props.history.push('/campaigns')
    )
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
    if (this.state.sessionsArray) {
      sessions = <SessionContainer
                      campaignId={this.state.campaignObj.id}
                      sessionList={this.state.sessionsArray}
                    />
    }

    let loot
    if (this.state.lootObj) {
      loot = <Loot
              inventory={this.state.lootObj.inventory}
              gold={this.state.lootObj.gold}
            />
    }


    return(
      <div>
        <div className="campaignHeader">
          <div className="container">
            <div className="row">
              <div className="col s12 m8 white-text">
                <p><a onClick={this.redirectToCampaigns}>Back to Campaigns</a></p>
                <h2 className="header-cinzel-font">{titleText}</h2>
                <p><i>{taglineText}</i></p>
                <div className="campaignHeader-description-container">
                  <blockquote>{descriptionText}</blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="campaignHeader-bottom-bar">
            <div className="container">
              <UserSearch/>
            </div>
          </div>
          <div className="campaignHeader-background-image"></div>
        </div>
        <div className="container">
          <div className="row">
            {sessions}
          </div>
        </div>
      </div>
    )
  }
}

export default CampaignShow;

// {loot}
