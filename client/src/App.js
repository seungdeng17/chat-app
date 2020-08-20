import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from '@/styles/GlobalStyles';
import Join from '@components/Join';

function App() {
  return (
    <>
      <GlobalStyles />

      <Router>
        <Switch>
          <Route exact path='/' component={Join} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
