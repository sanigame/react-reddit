import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RedditList, RedditDetail, Subreddit } from './pages';
import { ResponsiveLayout } from './layout'

function App() {
  return (
    <Router>
      <ResponsiveLayout>
      <Switch>
        <Route path="/detail/:name" >
          <RedditDetail />
        </Route>
        <Route path="/subreddit/:name" >
          <Subreddit />
        </Route>
        <Route path="/" >
          <RedditList />
        </Route>
      </Switch>
      </ResponsiveLayout>
    </Router>
  );
}

export default App;
