import React from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar inverse className="cars-navbar" fixedTop={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Vitrina Carros</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem>
        <Link to="/compare">Comparar autos</Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;