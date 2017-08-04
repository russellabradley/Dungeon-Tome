import React, { Component } from 'react'

export default class CampaignShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignObj: null,
      showDescription: false
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
      this.setState({campaignObj: responseData})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  render(){

    let titleText
    let taglineText
    let descriptionText
    if (this.state.campaignObj) {
      titleText = this.state.campaignObj.title
      taglineText = this.state.campaignObj.tagline
      descriptionText = this.state.campaignObj.description
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col m6">
            <h2>{titleText}</h2>
            <blockquote>{taglineText}</blockquote>
            <p>{descriptionText}</p>
          </div>
        </div>
      </div>
    )
  }
}
