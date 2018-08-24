import React from 'react';
import { Grid, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import numeral from 'numeral';

class ComparationTable extends React.Component {
  
  constructor(props) {
    super(props);
    if (props.cars.length < 1) {
      props.history.push('/compare');
    }
  }

  render() {
    return (
      <Grid>
        <Table responsive>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>Precio</th>
              <th>Combustible</th>
              <th>Transmisión</th>
              <th>Kilometraje</th>
            </tr>
          </thead>
          <tbody>
            { this.props.cars.map((car) => (
              <tr>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{numeral(car.price).format('0,0[.]00 $')}</td>
                <td>{car.fuel}</td>
                <td>{car.transmission}</td>
                <td>{numeral(car.mileage).format('0,0[.]00 km')}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state.filter((car) => car.compare)
});

export default connect(mapStateToProps)(ComparationTable);
