import React from 'react';
import { Link } from 'react-router-dom'

import campaignTileImage from '../../../../assets/images/dnd_campaign_tile_01.png'


const CampaignTile = props => {
  let campaign = "/campaigns/" + props.campaignId;

  return(
    <div className="card">
      <div className="card-image">
        <img src={campaignTileImage}/>
        <span className="card-title">{props.title}</span>
      </div>
      <div className="card-content">
        <p>{props.tagline}</p>
      </div>
      <div className="card-action">
        <Link to={campaign}>Enter Campaign</Link>
      </div>
    </div>
  )
}

export default CampaignTile;
