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
            compare: true,
            ...car
          } : car);
    case 'STOP_COMPARISON':
      return state.map((car) => car.id === action.carId ? 
            {
              compare: false,
              ...car
            } : car);
    default:
      return state;
  }
};