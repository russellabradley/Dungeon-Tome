import React, { Component } from 'react'
import CampaignTile from '../components/CampaignTile'


class CampaignsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignsList: null,
      showModel: false
    }
    this.modelStyle = this.modelStyle.bind(this)
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

  modelStyle () {
    if (this.state.showModel) {
      return {
        transform: 'scale(1)'
      }
    } else {
      return {
        transform: 'scale(0)'
      }
    }
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
      <div className='flexie'>
        <div className="container">
          <div className='row'>
            <div className="col s0 m1">
            </div>
            <div className="col s12 m10">
              <h2 className="header-cinzel-font center">My Campaigns</h2>
              {campaigns}
              <button onClick={() => {
                this.setState({
                  showModel: true
                })
              }} className="btn light-blue lighten-2">+ New Campaign</button>
            </div>
          </div>
        </div>
        <div id='add-model' style={this.modelStyle()}>
          <div onClick={() => this.setState({showModel: false})}>X</div>
          <form>
            <input />
            <input />
            <input />
          </form>
        </div>
      </div>
    )
  }
}

export default CampaignsIndex;
