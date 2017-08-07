import React from 'react';
import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link
} from 'react-router-dom';

import Login from '../containers/LoginPageContainer';
import CampaignsIndex from '../containers/CampaignsIndex';
import CampaignShow from '../containers/CampaignShow';


const Main = props => (
  <div>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/campaigns' component={CampaignsIndex}/>
      <Route exact path='/campaigns/:id' component={CampaignShow}/>
    </Switch>
  </div>
)

export default Main;
