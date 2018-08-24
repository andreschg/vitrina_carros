import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import MainSection from '../components/MainSection';
import CarDetail from '../components/Cars/CarDetail';
import ChooseComparables from '../components/ChooseComparables';
import ComparationTable from '../components/ComparationTable';

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-body">
      <Navigation />
      <Switch>
        <Route path="/" component={MainSection} exact={true} />
        <Route path="/car/:id" component={CarDetail} />
        <Route path="/compare" component={ChooseComparables} />
        <Route path="/comparation-table" component={ComparationTable} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;