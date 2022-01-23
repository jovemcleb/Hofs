//forEach
//Apenas percorre o array, por si só, não retorna um novo objeto
const {passengers} = require('../data.js');
// Adiciona idade (age) para cada pessoa
passengers.forEach((element) => element.age = 2022 - element.birthyear); 
  
console.table(passengers);