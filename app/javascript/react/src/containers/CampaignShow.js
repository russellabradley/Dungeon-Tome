import React, { Component } from 'react'

export default class CampaignShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaign_obj: null
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
      this.setState({campaign_obj: responseData})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  render(){
    let titleText
    let taglineText
    let descriptionText
    if (this.state.campaign_obj) {
      titleText = this.state.campaign_obj.title
      taglineText = this.state.campaign_obj.tagline
      descriptionText = this.state.campaign_obj.description
    }

    return(
      <div>
        <h2>{titleText}</h2>
        <h5>{taglineText}</h5>
        <p>{descriptionText}</p>
      </div>
    )
  }
}
