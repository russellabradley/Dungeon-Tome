import React from 'react'

import UserTile from '../components/UserTile'

class UserSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      usersArray: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.addNewUserToArray = this.addNewUserToArray.bind(this);
  }

  handleSearch(event) {
    event.preventDefault()
    let query = '?email=' + encodeURIComponent(this.state.query) + '&campaignId=' + encodeURIComponent(1);
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

  handleSearchInput(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  addNewUserToArray(response) {
    this.setState({usersArray:[...this.state.usersArray, response.user]})
  }


  render() {

    let results
    if (this.state.usersArray.length > 0) {
      results = this.state.usersArray.map (u => {
        return(
          <UserTile
            key={u.user_id}
            email={u.user_email}
            id={u.user_id}
          />
        )
      })
    }

    return(
      <div className="row">
        <div className="col s12 m6">
          <button className="btn red lighten-2">Cancel</button>
          <form onSubmit={this.handleSearch}>
            <input id="query" value={this.state.query} placeholder="Search for a user by email address" type="text" onChange={this.handleSearchInput}/>
            <button className="btn light-blue lighten-2 right" type='submit'>Search</button>
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
