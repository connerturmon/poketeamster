import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}