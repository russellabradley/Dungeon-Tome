import React from 'react'

class UserSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      users: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearch(event) {
    event.preventDefault()
    let query = '?email=' + encodeURIComponent(this.state.query);
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
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    // Clear the search query
    this.setState({query: ""})
  }

  handleSearchInput(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }


  render() {

    return(
      <div>
        <button className="btn red lighten-2">Cancel</button>
        <form onSubmit={this.handleSearch}>
          <input id="query" value={this.state.query} placeholder="Search for a user by email address" type="text" onChange={this.handleSearchInput}/>
          <button className="btn light-blue lighten-2 right" type='submit'>Search</button>
        </form>
      </div>
    )
  }


}

export default UserSearch