import React from 'react';
import { Grid } from 'react-bootstrap';
import CarCards from './Cars/CarCards';

export default class MainSection extends React.Component {

  onCardClick = (id) => {
    this.props.history.push(`/car/${id}`);
  }

  render() {
    return (
      <Grid>
        <CarCards onCardClick={this.onCardClick} />
      </Grid>
    );
  }
}