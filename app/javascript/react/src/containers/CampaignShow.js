import React from 'react';

import UserSearch from './UserSearch'
import SessionContainer from './SessionContainer';
import SessionTile from '../components/SessionTile';
// import Loot from '../components/Loot';


class CampaignShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignObj: null,
      sessionsArray: null,
      charactersArray: [],
      showDescription: false,
      addUsersShow: false,
      currentUser: null
    }
    this.redirectToCampaigns = this.redirectToCampaigns.bind(this)
    this.toggleAddUserShow = this.toggleAddUserShow.bind(this)
    this.toggleDescriptionTextShow = this.toggleDescriptionTextShow.bind(this)
    this.createCharacter = this.createCharacter.bind(this)
  }

  componentWillMount() {
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
        sessionsArray: responseData.campaign.sessions.reverse(),
        charactersArray: responseData.campaign.characters,
        currentUser: responseData.campaign.user_id
      })
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
  }

  toggleDescriptionTextShow() {
    this.setState({showDescription: !this.state.showDescription})
  }


  // Creates character from add user form and adds it to the char array
  // This method is passed as props to UserSearch
  createCharacter(characterFormData) {
    fetch('/api/v1/characters', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      method: 'POST',
      body: JSON.stringify(characterFormData)
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
      // Add character to the list of characters
      let newCharArray = this.state.charactersArray.slice()
      newCharArray.push(responseData)
      this.setState({charactersArray: newCharArray})
      this.setState({addUsersShow: false})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {

    let titleText, taglineText, campaignId, sessionList, descriptionText
    if (this.state.campaignObj) {
      titleText = this.state.campaignObj.title
      taglineText = this.state.campaignObj.tagline
      campaignId = this.state.campaignObj.id
      sessionList = this.state.sessionsArray
      descriptionText = this.state.campaignObj.description
    }


    let chipContent, chipClass, chipMeTag
    let characterTags = this.state.charactersArray.map (c => {
      debugger;
      if (c.user_id === this.state.currentUser) {
        chipClass = "chip yellow lighten-3"
        chipMeTag = "(Me)"
      } else {
        chipClass = "chip"
        chipMeTag = ""
      }
      if (c.char_class === "") {
        chipContent = `${chipMeTag} ${c.char_name}`
      } else {
        chipContent = `${chipMeTag} ${c.char_name}, ${c.char_class}`
      }
      return(
        <div className={chipClass}>{chipContent}</div>
      )
    })


    let sessions
    if (this.state.sessionsArray) {
      sessions = <SessionContainer
                      campaignId={campaignId}
                      sessionList={sessionList}
                    />
    }


    // User Search stuff
    let addUserButtonClass, addUserButtonText, searchWindowClasses
    let userSearch = <UserSearch campaignId={campaignId} createCharacter={this.createCharacter}/>
    if (this.state.addUsersShow) {
      addUserButtonClass = "btn red lighten-2"
      addUserButtonText = "Cancel"
      searchWindowClasses = "newSessionForm -active"
    } else {
      addUserButtonClass = "btn blue lighten-2"
      addUserButtonText = "+ Add Player"
      searchWindowClasses = "newSessionForm -inactive"
    }


    // Description text
    let descriptionTextClasses, descriptionToggleText
    if (this.state.showDescription) {
      descriptionTextClasses = "newSessionForm -active"
      descriptionToggleText = "Hide description"
    } else {
      descriptionTextClasses = "newSessionForm -inactive"
      descriptionToggleText = "Show description..."
    }

    // Description text toggle button
    let descriptionToggle
    if (this.state.campaignObj) {
      if (this.state.campaignObj.description) {
        descriptionToggle = <div onClick={this.toggleDescriptionTextShow}>{descriptionToggleText}</div>
      }
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
                <blockquote>
                  <div className={descriptionTextClasses}>
                    {descriptionText}
                  </div>
                  {descriptionToggle}
                </blockquote>
              </div>
            </div>
          </div>
          <div className="campaignHeader-bottom-bar">
            <div className="container">
              <h5 className="header-cinzel-font center">- Players -</h5>
              <div className="center">
                {characterTags}
                <button onClick={this.toggleAddUserShow} className={addUserButtonClass}>{addUserButtonText}</button>
              </div>
              <div className={searchWindowClasses}>
                {userSearch}
              </div>
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
