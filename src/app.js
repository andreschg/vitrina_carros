import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent';
import './styles/style.scss';

const App = () => (
  <div>
    <p>Hello world!!!</p>
    <MainComponent />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

