import React, { Component } from 'react'

export default class CampaignShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaign_id: 1,
      title: null,
      description: null,
      tagline: null,
      quests: [],
      sessions: [],
      loots: []
    }
  }

  componentDidMount() {
      fetch(`/api/v1/campaigns/`, {
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
        this.setState({campaignsList: responseData})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }


  render(){

    return(
      <div>
        <p>Hello from campaign show page</p>
      </div>
    )
  }
}
