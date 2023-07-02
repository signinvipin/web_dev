console.log('CommonJS Export Module');

// default export commonJS

// Object 'export' is 'undefined' in browser and Javascript as well.

// Available in "node.js" only.

// Assigning to exports will not modify module
module.exports = function carIntro(make, model) {
  return `This is a ${make} ${model}.`;
};

//  Or,

exports.carIntro = function (make, model) {
  return `This is a ${make} ${model}.`;
};
