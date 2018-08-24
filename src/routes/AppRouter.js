import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CarsPage from '../components/Cars/CarsPage';
import CarDetail from '../components/Cars/CarDetail';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={CarsPage} exact={true} />
        <Route path="/car/:id" component={CarDetail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;