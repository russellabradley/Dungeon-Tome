import React from 'react'

const UserTile = props => {
  return(
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title">{props.username}</span>
        <p>Create a character for this player to add them to the campaign.</p>
        <input id="charName" placeholder="Character name" value={props.nameValue} onChange={props.handleInput}/>
        <input id="charClass" placeholder="Class" value={props.classValue} onChange={props.handleInput}/>
        <button className={props.buttonClass} onClick={props.handleCharacterSubmit}>Add</button>
      </div>
    </div>
  )
}

export default UserTile;


// This has to have a form in it to add a character name and class.

// The button should only be green once name is not "".

// The form validation and button className should be passed down as
// props from UserSearch.

// The charName and charClass should be saved in state of UserSearch.

// The fetch call to create a new character and add it to the list should
// be in CampaignShow.
