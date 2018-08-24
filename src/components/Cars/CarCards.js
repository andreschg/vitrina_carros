import React from 'react';
import { Grid, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import CarCard from './CarCard';

class CarsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
  }

  onFilterChange = (e) => {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    return (
      <Row>
      <InputGroup className="cars-filter" >
        <FormControl 
          type="text" 
          value={this.state.filter}
          onChange={this.onFilterChange} />
        <InputGroup.Button>
          <Button>Filtrar por marca</Button>
        </InputGroup.Button>
      </InputGroup>
      { this.props.cars.length > 0 && 
        this.props.cars.filter(({brand}) => 
          this.state.filter.length > 0 ? brand.toLowerCase().includes(this.state.filter.toLowerCase()) : true
          )
          .map((car) => (
            <CarCard key={car.id} {...car} onCarClick={this.props.onCardClick} />
          ))}
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state
});

export default connect(mapStateToProps)(CarsPage);