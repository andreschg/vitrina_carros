import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import CarCard from './CarCard';

const CarsPage = (props) => 
{
  console.log(props);
  return (
    <Grid>
      <Row>
        { props.cars.length > 0 && props.cars.map((car) => (
          <CarCard {...car}/>
        ))}
      </Row>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  cars: state
});

export default connect(mapStateToProps)(CarsPage);