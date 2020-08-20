import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from '@/styles/GlobalStyles';
import Join from '@components/Join';
import Chat from '@components/Chat/Chat';

function App() {
  return (
    <>
      <GlobalStyles />

      <Router>
        <Switch>
          <Route exact path='/' component={Join} />
          <Route path='/chat/:name/:channel' component={Chat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
