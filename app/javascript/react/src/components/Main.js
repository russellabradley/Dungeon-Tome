import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Campaign from './Campaign';


const Main = props => (
  <div>
    <main>
      <p>hello from main</p>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/campaign' component={Campaign}/>
      </Switch>
    </main>
  </div>
)

export default Main;
