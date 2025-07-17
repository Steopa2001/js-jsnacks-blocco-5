const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

const classe = students.find(function(studente) {
  return studente.name === 'Marco Lanci';
}).class;
console.log(classe);

// //arrow function
// const classeMarco = students.find(student => student.name === 'Marco Lanci').class;

// console.log(classeMarco); // '3C'
