import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../Pages/Overview.js';
// import Repositories from './Repositories.js';
// import Stars from './Stars.js';
// import Followers from './Followers.js';
// import Following from './Following.js';

const Main = () => {
  <div>
    <Switch>
      <Route path="/Overview" component={Overview} />
      {/* <Route path="/Repositories" component={Repositories} />
      <Route path="/Stars" component={Stars} />
      <Route path="/Followers" component={Followers} />
      <Route path="/Following" component={Following} /> */}
    </Switch>
  </div>
};

export default Main;
