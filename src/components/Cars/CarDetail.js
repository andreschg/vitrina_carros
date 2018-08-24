import React from 'react';
import { Grid, PageHeader, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

const CarDetail = (props) => (
  <Grid>
    <div className="car-detail">
      <PageHeader>
        {props.car.brand} {props.car.model} ({props.car.year})
      </PageHeader>
      <Image className="car-detail-image" src={props.car.img} />
    </div>
  </Grid>
);

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
  car: state.find((car) => ownProps.match.params.id === car.id)
  }
};

export default connect(mapStateToProps)(CarDetail);