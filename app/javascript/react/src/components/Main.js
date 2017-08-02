import React from 'react';
import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link
} from 'react-router-dom';

import Home from './Home';
import CampaignContainer from '../containers/CampaignContainer';


const Main = props => (
  <div>
    <p>hello from main</p>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/campaign' component={CampaignContainer}/>
    </Switch>
  </div>
)

export default Main;
