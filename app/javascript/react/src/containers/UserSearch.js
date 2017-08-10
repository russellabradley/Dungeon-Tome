import React from 'react'

import UserTile from '../components/UserTile'

class UserSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      usersArray: [],
      charName: "",
      charClass: ""
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.addNewUserToArray = this.addNewUserToArray.bind(this)
    this.handleCharacterSubmit = this.handleCharacterSubmit.bind(this)
  }

  handleSearch(event) {
    event.preventDefault()
    let query = '?email=' + encodeURIComponent(this.state.query) + '&campaignId=' + encodeURIComponent(this.props.campaignId);
    fetch('/api/v1/users/search' + query, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => {
      console.log(response)
      // Adds returned user id to the usersArray array in state
      if (response.user) {
        this.addNewUserToArray(response) // Only add to array if repsonse is a user and not a warning
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    // Clear the search query
    this.setState({query: "", usersArray: []})
  }

  // Creates data to make character from form
  handleCharacterSubmit(event) {
    event.preventDefault()
    let characterFormPayload = {
      charName: this.state.charName,
      charClass: this.state.charClass,
      campaignId: this.props.campaignId
    }
    // Sends form data up to create character in CampaignShow
    this.props.createCharacter(characterFormPayload)
  }


  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  addNewUserToArray(response) {
    this.setState({usersArray:[...this.state.usersArray, response.user]})
  }


  render() {

    let results, buttonClass
    if (this.state.charName === "") {
      buttonClass = "btn blue lighten-2 disabled"
    } else {
      buttonClass = "btn blue lighten-2"
    }
    if (this.state.usersArray.length > 0) {
      results = this.state.usersArray.map (u => {
        return(
          <UserTile
            key={u.user_id}
            email={u.user_email}
            id={u.user_id}
            buttonClass={buttonClass}
            nameValue={this.state.charName}
            classValue={this.state.charClass}
            handleInput={this.handleInput}
            handleCharacterSubmit={this.handleCharacterSubmit}
          />
        )
      })
    }

    return(
      <div className="row">
        <div className="col s12 m6">
          <form onSubmit={this.handleSearch}>
            <input id="query" value={this.state.query} placeholder="Search for a user by email address" onChange={this.handleInput}/>
          </form>
        </div>
        <div className="col s12 m6">
          {results}
        </div>
      </div>
    )
  }
}

export default UserSearch;
