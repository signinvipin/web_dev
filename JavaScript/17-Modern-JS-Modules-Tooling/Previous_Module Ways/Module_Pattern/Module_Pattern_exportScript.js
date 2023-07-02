// Old Module_Pattern can not import or export
// But variables are global and can be accessed.
// Scripts should be placed in sequence.

console.log('Module_Pattern Global Variable Export');

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
