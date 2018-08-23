import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-sass';
import { Navbar, Navm, NavItem } from 'react-bootstrap';

import MainComponent from './components/MainComponent';
import './styles/style.scss';

const App = () => (
  <div>
    <Navbar inverse className="navbar-vi" >
      <Navbar.Header>
        <span>Vitrina</span>
      </Navbar.Header>
    </Navbar>
    <MainComponent />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

