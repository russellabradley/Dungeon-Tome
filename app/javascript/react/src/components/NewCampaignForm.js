import React from 'react'

const NewCampaignForm = (props) => {
  return(
    <div>
      <h4 className="header-cinzel-font center">New Campaign</h4>
      <form>
        <p>Title</p>
          <input id="title" className="input-field" placeholder="The Lord of the Rings" onChange={props.handleInput} value={props.title}/>
        <p>Tagline</p>
          <input id="tagline" placeholder="A quest to destroy the evil ring of power." onChange={props.handleInput} value={props.tagline}/>
        <p>Description</p>
          <textarea id="description" placeholder="Nine heroes must journey across Middle Earth..." onChange={props.handleInput} value={props.description}/>
        <button type="submit" className="btn blue lighten-2" onClick={props.handleNext}>Next</button>
      </form>
    </div>
  )
}

export default NewCampaignForm
