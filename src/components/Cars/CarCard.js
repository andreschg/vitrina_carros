import React from 'react';
import { Col, Panel } from 'react-bootstrap';
import numeral from 'numeral';

export default class CarCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col xs={12} sm={6} md={4} >
        <Panel className={`car-card ${ this.props.compare ? 'selected' : '' }`} onClick={() => { this.props.onCarClick(this.props.id, this.props.compare); }}>
          <Panel.Heading>{this.props.brand} {this.props.model} ({this.props.year})</Panel.Heading>
          <Panel.Body>
            <img className="car-card-thumbnail" src={this.props.img} />
          </Panel.Body>
          <Panel.Footer>
            { numeral(this.props.price).format('0,0[.]00 $') }
          </Panel.Footer>
        </Panel>
      </Col>
    );
  }
}