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

carsJSON.default.forEach(({ brand, cars }) => {
  cars.forEach((car) => {
    store.dispatch(addCar({
      compare: false,
      brand,
      ...car
    }));
  });
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
