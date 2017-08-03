import React from 'react';
import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link
} from 'react-router-dom';

import Login from './Login';
import CampaignContainer from '../containers/CampaignContainer';


const Main = props => (
  <div>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/campaigns' component={CampaignContainer}/>
    </Switch>
  </div>
)

export default Main;
