import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import CharacterIndex from './CharacterIndex';


const Main = props => (
  <div>
    <main>
      <p>hello from main</p>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/characters' component={CharacterIndex}/>
      </Switch>
    </main>
  </div>
)

export default Main;
