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
      showDescription: false,
      addUsersShow: false
    }
    this.redirectToCampaigns = this.redirectToCampaigns.bind(this)
    this.toggleAddUserShow = this.toggleAddUserShow.bind(this)
    this.handleAddCharacter = this.handleAddCharacter.bind(this)
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
        sessionsArray: responseData.campaign.sessions.reverse(),
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

  toggleAddUserShow() {
    this.setState({addUsersShow: !this.state.addUsersShow})
    console.log(this.state.addUsersShow)
  }

  handleAddCharacter(charData) {
    event.preventDefault();
  }


  render() {
    // if (this.state.showDescription) {
    //   descriptionText =
    //     <div>
    //       {this.state.campaignObj.description}
    //       <p onClick={() => this.setState({showDescription: false})}>Hide description ^</p>
    //     </div>
    // } else {
    //   descriptionText =
    //     <p onClick={() => this.setState({showDescription: true})}>Show description...</p>
    // }

    let titleText, taglineText, descriptionText

    if (this.state.campaignObj) {
      titleText = this.state.campaignObj.title
      taglineText = this.state.campaignObj.tagline
      descriptionText = this.state.campaignObj.description
    }

    let characterTags
    if (this.state.charactersArray) {
      characterTags = this.state.charactersArray.map (c => {
        return(
          <div className="chip">{c.char_name}, {c.char_class}</div>
        )
      })
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

    let addUserButtonClass, addUserButtonText
    if (this.state.addUsersShow) {
      addUserButtonClass = "btn red lighten-2"
      addUserButtonText = "Cancel"
    } else {
      addUserButtonClass = "btn green lighten-2"
      addUserButtonText = "+ Add Player"
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
                  <blockquote>
                    {descriptionText}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="campaignHeader-bottom-bar">
            <div className="container">
              <h5 className="header-cinzel-font center">Characters</h5>
              <div className="center">
                {characterTags}
                <button onClick={this.toggleAddUserShow} className={addUserButtonClass}>
                  {addUserButtonText}
                </button>
              </div>
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
