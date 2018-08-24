import React from 'react';
import { Grid, Row, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CarCards from './Cars/CarCards';
import { switchComparison } from '../store/actions/carsActions';

class ChooseComparables extends React.Component {

  onCardClick = (id, compare) => {
    if (compare || this.props.count < 3) {
      this.props.dispatch(switchComparison(id));
    }
  }

  render() {
    return (
      <Grid className="comparables">
        <Alert bsStyle="info">
          <Row>
            <Col md={8}>
              En esta sección puedes seleccionar varios autos para luego ser desplegados en una tabla comparativa.<br/>Los autos seleccionados se tornaran de un color diferente y no puedes seleccionar más de tres.
            </Col>
            <Col md={4}>
              <Link to="/comparation-table" className="btn btn-default pull-right" >Ver Tabla Comparativa</Link>
            </Col>
          </Row>
        </Alert>
        <CarCards onCardClick={this.onCardClick} />
      </Grid>
    );
  }
}

const mapStateToProps = (state) => (
  {
    count: state.reduce((last, current) => current.compare ? last + 1 : last, 0)
  }
);

export default connect(mapStateToProps)(ChooseComparables);