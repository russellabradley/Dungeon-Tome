import React, { Component } from 'react'

import CampaignTile from '../components/CampaignTile';


export default class CampaignsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignsList: []
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

    let campaigns
    campaigns = this.state.campaignsList.map (c => {
      return(
        <div>
          <CampaignTile
            key={c.id}
            campaignId={c.id}
            title={c.title}
            tagline={c.tagline}
            description={c.description}
          />
        </div>
      )
    })

    return(
      <div>
        <div className='row'>
          <div className="col s12 m6">
            {campaigns}
          </div>
        </div>
      </div>
    )
  }
}
