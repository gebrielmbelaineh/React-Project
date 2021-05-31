import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';

const App = (props) => {
  return (

    <div className="App">
      <h1>React-Redux Project </h1>
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>

  );
};

export default App;
