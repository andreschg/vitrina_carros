import React from 'react';
import { Col, Panel } from 'react-bootstrap';

export default class CarCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col xs={12} md={4} >
        <Panel className="car-card">
          <Panel.Heading>{this.props.brand} {this.props.model} ({this.props.year})</Panel.Heading>
          <Panel.Body>
            <img className="car-card-thumbnail" src={this.props.img} />
          </Panel.Body>
          <Panel.Footer>
            { this.props.price }
          </Panel.Footer>
        </Panel>
      </Col>
    );
  }
}