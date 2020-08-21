import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from '@/styles/GlobalStyles';
import Join from '@components/Join';
import Chat from '@components/Chat/Chat';
import Channel from '@components/Channel/Channel';

function App() {
  return (
    <>
      <GlobalStyles />

      <Router>
        <Switch>
          <Route exact path='/' component={Join} />
          <Route path='/chat/:name/:channel' component={Chat} />
          <Route path='/channel/:name' component={Channel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
