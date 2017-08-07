import React from 'react';
import { Link } from 'react-router-dom'

import campaignTileImage from '../../../../assets/images/dnd_campaign_tile_01.png'


const CampaignTile = props => {
  let campaignLink = "/campaigns/" + props.campaignId;

  return(
    <div className="card small hoverable">
      <div className="card-image">
        <img src={campaignTileImage}/>
        <span className="card-title header-cinzel-font">{props.title}</span>
      </div>
      <div className="card-content">
        <p>{props.tagline}</p>
      </div>
      <div className="card-action">
        <Link to={campaignLink}>Enter Campaign</Link>
      </div>
    </div>
  )
}

export default CampaignTile;
