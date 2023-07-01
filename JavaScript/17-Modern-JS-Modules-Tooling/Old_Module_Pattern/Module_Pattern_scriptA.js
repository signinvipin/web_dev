'use strict';

// Old Module_Pattern can not import or export

const favCar = function () {
  const allCars = [];
  const price = 20000;
  const addCars = function (make, model) {
    allCars.push(`[${make} ${model}]`);
  };
  return { allCars, price, addCars };
};

const myCars = favCar();
console.log(myCars);

myCars.addCars('Maruti', '800');
console.log(myCars.allCars);
