import React from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import CarCards from './Cars/CarCards';

class ChooseComparables extends React.Component {

  onCardClick = (id) => {
    
  }

  render() {
    return (
      <Grid>
        <CarCards onCardClick={this.onCardClick} />
      </Grid>
    );
  }
}

export default connect()(ChooseComparables);