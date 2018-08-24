import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
//import CarsPage from '../components/Cars/CarsPage';
import MainSection from '../components/MainSection';
import CarDetail from '../components/Cars/CarDetail';
import ChooseComparables from '../components/ChooseComparables';

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-body">
      <Navigation />
      <Switch>
        <Route path="/" component={MainSection} exact={true} />
        <Route path="/car/:id" component={CarDetail} />
        <Route path="/compare" component={ChooseComparables} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;