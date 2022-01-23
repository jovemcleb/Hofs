//FILTER - cria um novo array com filtro
const {childrenAge, mailList, passengers} = require("../data.js");

// Crianças entre 2 - 11 anos
const childrenFiltered = childrenAge.filter((element) => (element >= 2 && element <= 11));

//console.log(childrenFiltered);

// Emails rocketseat.com
const filteredMails = mailList.filter((element) => (element.includes('rocketseat')));

//console.log(filteredMails);

// Nascidos depois de 2000
const filteredPassagers = passengers.filter((element) => element.birthyear > 2000);
//console.table(filteredPassagers);
