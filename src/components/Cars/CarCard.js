import React from 'react';
import { Col } from 'react-bootstrap';

export default class CarCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col xs={12} md={4} >
        <div className="car-card">
          <h2>{this.props.model}</h2>
        </div>
      </Col>
    );
  }
}