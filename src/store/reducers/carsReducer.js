const carsDefaultState = {
  cars: []
};

export default (state = carsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return [
        ...state,
        action.car
      ];
    case 'START_COMPARISON':
      return state.map((car) => car.id === action.carId ? 
          {
            ...car,
            compare: true
          } : car);
    case 'STOP_COMPARISON':
      return state.map((car) => car.id === action.carId ? 
            {
              ...car,
              compare: false
            } : car);
    case 'SWITCH_COMPARISON':
      return state.map((car) => car.id === action.carId ? 
          {
            ...car,
            compare: !car.compare,
          } : car);
    default:
      return state;
  }
};