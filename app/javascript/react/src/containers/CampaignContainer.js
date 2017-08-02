import React, { Component } from 'react'

class CampaignContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignsList: []
    }
  }

  componentDidMount() {
      fetch(`/api/v1/campaigns/`)
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
          <h2>{c.title}</h2>
          <h4>{c.tagline}</h4>
          <p>{c.description}</p>
        </div>
      )
    })

    return(
      <div>
        <p>Hello from campaign container</p>
        {campaigns}
      </div>
    )
  }
}


export default CampaignContainer;
