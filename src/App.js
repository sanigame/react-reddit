import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RedditList, RedditDetail } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:name" >
          <RedditDetail />
        </Route>
        <Route path="/" >
          <RedditList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
