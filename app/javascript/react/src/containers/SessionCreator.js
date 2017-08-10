import React from 'react'

class SessionCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      title: null,
      notes: null,
      date: null
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleNewSessionSubmit = this.handleNewSessionSubmit.bind(this);
    this.toggleEditState = this.toggleEditState.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  // Handles the loop of state/value for form values
  handleInput(event) {
    if (event.target.value === "") {
      this.setState({
        [event.target.id]: null
      })
    } else {
      this.setState({
        [event.target.id]: event.target.value
      })
    }
  }

  // New Session Submit
  handleNewSessionSubmit(event) {
    event.preventDefault()
    // Checks if the notes field has any input, as it is required
    if (this.state.notes === "") {
      console.log("fail")
    } else {
      // puts the states into a payload to hand off to fetch call
      let formPayload = {
        notes: this.state.notes,
        title: this.state.title,
        date: this.state.date
      }
      this.props.createSession(formPayload)
      this.clearForm() // Clears the form
      this.toggleEditState() // closes the form
    }
  }

  // Toggles the form closed/open
  toggleEditState() {
    this.setState({showForm: !this.state.showForm})
  }

  // Clears the states (and form values)
  clearForm() {
    this.setState({
      title: "",
      notes: "",
      date: ""
    })
  }

  render() {

    let newSessionForm, sessionCreatorButtonClasses, sessionFormClasses, newSessionButtonText

    // Toggled the button New Session/Cancel
    if (this.state.showForm) {
      sessionFormClasses = "newSessionForm -active"
      sessionCreatorButtonClasses = "btn red lighten-2 sessionCreator-active"
      newSessionButtonText = "Cancel"
    } else {
      sessionFormClasses = "newSessionForm -inactive"
      sessionCreatorButtonClasses = "btn green lighten-1 sessionCreator-inactive"
      newSessionButtonText = "New Session"
    }

    // Form to create new session
    newSessionForm =
      <div className={sessionFormClasses}>
        <div className="card">
          <div className="card-content black-text">
            <form onSubmit={this.handleNewSessionSubmit}>
              <p>Date</p>
                <input value={this.state.date} placeholder="October the twenty-fourth" id='date' onChange={this.handleInput}/>
              <p>Title</p>
                <input value={this.state.title} placeholder="The Council of Elrond" id='title' onChange={this.handleInput} />
              <p>Notes (required)</p>
                <div className="input-field">
                  <textarea value={this.state.notes} placeholder="The party ventured forth..." className="materialize-textarea" id='notes' onChange={this.handleInput} />
                </div>
              <button className="btn light-blue lighten-2" type='submit'>Create</button>
            </form>
          </div>
        </div>
      </div>

    return(
      <div className="newSessionCreator">
        <button onClick={this.toggleEditState} className={sessionCreatorButtonClasses}>
          {newSessionButtonText}
        </button>
        {newSessionForm}
      </div>
    )
  }
}

export default SessionCreator;
