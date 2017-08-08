import React, { Component } from 'react'

// import NewCampaignForm from '../components/NewCampaignForm'
// import NewCharacterForm from '../components/NewCharacterForm'


class CampaignNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      tagline: '',
      description: '',
      charName: '',
      charClass: '',
    }

    this.redirectToCampaigns = this.redirectToCampaigns.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.createCampaign = this.createCampaign.bind(this)
    this.handleCharacter = this.handleCharacter.bind(this)
    this.createCharacter = this.createCharacter.bind(this)
    this.validSubmit = this.validSubmit.bind(this)
  }

  redirectToCampaigns() {
    return(
      this.props.history.push('/campaigns')
    )
  }

  handleInput (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.validSubmit()) {
      let campaignFormPayload = {
        title: this.state.title,
        tagline: this.state.tagline,
        description: this.state.description
      }
      this.createCampaign(campaignFormPayload)
    }
  }

  createCampaign(campaignFormData) {
    fetch('/api/v1/campaigns', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      method: 'POST',
      body: JSON.stringify(campaignFormData)
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
      // Create the character with the new campaign's id
      this.handleCharacter(responseData.campaign.id)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  handleCharacter(campaignId) {
    let characterFormPayload = {
      charName: this.state.charName,
      charClass: this.state.charClass,
      campaignId: campaignId
    }
    this.createCharacter(characterFormPayload)
  }

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
      // redirect to new campaign
      this.redirectToCampaigns()
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  validSubmit() {
    if (this.state.title === '' || this.state.charName === '') {
      console.log("failed validation")
      return false
    } else {
      console.log("passed validation")
      return true
    }
  }


  render() {
    return(
      <div className="container">
        <p><a onClick={this.redirectToCampaigns}>Back to Campaigns</a></p>
        <h2 className="header-cinzel-font center">New Campaign</h2>
        <h5 className="header-cinzel-font">Campaign Details:</h5>
        <form>
          <p>Title <i>(required)</i></p>
            <input id="title" className="input-field" placeholder="The Lord of the Rings" onChange={this.handleInput} value={this.state.title}/>
          <p>Tagline</p>
            <input id="tagline" placeholder="A quest to destroy the evil ring of power." onChange={this.handleInput} value={this.state.tagline}/>
          <p>Description</p>
            <textarea id="description" placeholder="Nine heroes must journey across Middle Earth to defeat the evil Sauron before he covers the land in darkness and war..." onChange={this.handleInput} value={this.state.description}/>
        </form>
        <h5 className="header-cinzel-font">Your Character:</h5>
        <form>
          <p>Your Character Name <i>(required)</i></p>
            <input id="charName" placeholder="Gandalf the Grey (or Dungeon Master)" onChange={this.handleInput} value={this.state.charName}/>
          <p>Your Character Class</p>
            <input id="charClass" placeholder="Wizard" onChange={this.handleInput} value={this.state.charClass}/>
            <button type="submit" className="btn green lighten-2 right" onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    )
  }
}

export default CampaignNew;

// <NewCampaignForm
//   handleInput={this.handleInput}
//   titleValue={this.state.title}
//   taglineValue={this.state.tagline}
//   descriptionValue={this.state.description}
//   handleNext={this.handleNext}
// />
// <NewCharacterForm
//   handleInput={this.handleInput}
//   nameValue={this.state.charName}
//   classValue={this.state.charClass}
// />
