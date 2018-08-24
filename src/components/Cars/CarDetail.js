import React from 'react';
import { Grid, PageHeader, Image, Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

const CarDetail = (props) => (
  <Grid>
    <div className="car-detail">
      <PageHeader>
        {props.car.brand} {props.car.model} ({props.car.year})
      </PageHeader>
      <p>{props.car.description}</p>
      <Panel>
        <Panel.Heading>
          Mas información
        </Panel.Heading>
        <Panel.Body>
          <Table>
            <tbody>
              <tr>
                <td>Transmisión:</td>
                <td>{props.car.transmission}</td>
              </tr>

              <tr>
                <td>Combustible:</td>
                <td>{props.car.fuel}</td>
              </tr>

              <tr>
                <td>Kilometraje:</td>
                <td>{props.car.mileage}</td>
              </tr>
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
      <Image className="car-detail-image" src={props.car.img} />
    </div>
  </Grid>
);

const mapStateToProps = (state, ownProps) => ({
  car: state.find((car) => ownProps.match.params.id === car.id)
});

export default connect(mapStateToProps)(CarDetail);