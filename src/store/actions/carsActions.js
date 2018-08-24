export const addCar = (car) => {
  return {
    type: 'ADD_CAR',
    car
  }
}

export const startComparison = (carId) => {
  return {
    type: 'START_COMPARISON',
    carId
  }
}

export const stopComparison = (carId) => {
  return {
    type: 'STOP_COMPARISON',
    carId
  }
}

export const switchComparison = (carId) => {
  return {
    type: 'SWITCH_COMPARISON',
    carId
  }
}
