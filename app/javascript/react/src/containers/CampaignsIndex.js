import React, { Component } from 'react'
import CampaignTile from '../components/CampaignTile'


class CampaignsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignsList: null
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
        this.setState({campaignsList: responseData.campaigns})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  render(){
    let campaigns
    if (this.state.campaignsList) {
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
    }


    return(
      <div className="container">
        <div className='row'>
          <div className="col s0 m1">
          </div>
          <div className="col s12 m10">
            <button className="btn light-blue lighten-2">+ New Campaign</button>
            {campaigns}
          </div>
        </div>
      </div>
    )
  }
}

export default CampaignsIndex;
