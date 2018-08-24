import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CarsPage from '../components/Cars/CarsPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={CarsPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;