import React from 'react'

class SessionCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: true,
      title: '',
      notes: '',
      date: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      notes: this.state.notes,
      title: this.state.title,
      date: this.state.date
    }
    this.props.createSession(formPayload)
  }

  render() {

    let newSessionForm
    if (this.state.showForm) {
      newSessionForm =
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="date">Date</label>
          <input id='date' onChange={this.handleInput} />
          <label htmlFor="title">Title</label>
          <input id='title' onChange={this.handleInput} />
          <div className="input-field">
            <textarea className="materialize-textarea" id='notes' onChange={this.handleInput} />
            <label htmlFor="notes">Notes</label>
          </div>
          <button className="btn waves-effect waves-light" type='submit'>Submit</button>
        </form>
      </div>
    }

    return(
      <div className="newSessionCreator">
        <button className="btn-floating btn-large waves-effect waves-light green">
          <i className="material-icons">add</i>
        </button>
        {newSessionForm}
      </div>
    )
  }
}

export default SessionCreator;
