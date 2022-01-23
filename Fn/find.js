//FIND
//retorna o elemento ou undefined
const {passengers} = require('../data.js');
// retorne o Enzo
const findEnzo = passengers.find((element) => element.name.toLowerCase() === 'enzo');
console.table(findEnzo);
