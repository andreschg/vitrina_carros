import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>

      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;