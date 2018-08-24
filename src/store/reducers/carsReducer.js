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
    default:
      return state;
  }
};