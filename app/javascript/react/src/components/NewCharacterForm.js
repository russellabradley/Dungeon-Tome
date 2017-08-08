import React from 'react'

const NewCharacterForm = (props) => {
  return (
    <div>
      <h4 className="header-cinzel-font center">Your Character</h4>
      <form>
        <p>Your Character Name</p>
          <input id="charName" placeholder="Gandalf the Grey (or Dungeon Master)" onChange={props.handleInput} value={props.charName}/>
        <p>Your Character Class</p>
          <input id="charClass" placeholder="Wizard" onChange={props.handleInput} value={props.charClass}/>
        <button type="submit" className="btn green lighten-2">Create</button>
      </form>
    </div>
  )
}

export default NewCharacterForm
