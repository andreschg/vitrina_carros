import React from 'react';

export default class CarCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="car-card">
        <h2>this.props.model</h2>
      </div>
    );
  }
}