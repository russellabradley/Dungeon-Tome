import React from 'react';
import { Link } from 'react-router-dom';

// import SessionTile from '../components/SessionTile';


export default class SessionContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignId: this.props.campaignId
    }
  }


  render(){
    let sessions
    sessions = <div>
                <SessionTile
                  id={1}
                  sessionNum={1}
                  sessionTitle={"Session Test Name"}
                  sessionDate={"Session Test Date"}
                  sessionNotes={"These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. These are the notes for the test session. "}
                />
              </div>


    return(
      <div className="container">
        {sessions}
      </div>
    )
  }
}
