const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//arrow function
const incrementati = numbers.map(num => num + 1);

console.log(incrementati);


// //base function
// const incrementati = numbers.map(function(num) {
//   return num + 1;
// });
