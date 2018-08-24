import { createStore } from 'redux';
import carsReducer from './reducers/carsReducer';

const store = createStore(carsReducer);

export default store;