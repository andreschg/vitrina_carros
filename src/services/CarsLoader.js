import * as json from '../../assets/carros.json';

export const loadCars = () => {

 //console.log(dir);
 $.getJSON(dir, (data) => {
   console.log(data);
 });

}
