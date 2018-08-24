import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap-sass';
import AppRouter from './routes/AppRouter';
import store from './store/configureStore';
import { addCar } from './store/actions/carsActions';
import './styles/style.scss';
import * as carsJSON from '../assets/carros.json';

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

carsJSON.default.forEach(({ brand, cars }) => {
  cars.forEach(({ id, year, model, price, img }) => {
    store.dispatch(addCar({
      id,
      brand,
      model,
      year,
      price,
      img
    }));
  });
});