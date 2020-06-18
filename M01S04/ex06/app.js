var person = {
  name: 'Minicaru',
  surname: 'Alexandru',
  age: 32,
  petowner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'c++',
    'node.js',
    'jquery'
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age:30
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age:31
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age:29
    }
  ]
};

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.');
var message = '';
var i = 0;

for (i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    message = message + person.skills[i] + ' ';
  }
}

console.log(message.trim());

console.warn('In mod similar, afiseaza skillurile care NU incep cu j.');
message = '';

for (i = 0; i < person.skills.length; i++) {
  if (person.skills[i][0] !== 'j') {
    message = message + `${person.skills[i]}` + ' ';
  }
}

console.log(message.trim());

console.warn(' In mod similar, afiseaza skillurile care NU contin j.');
message = '';

for (i = 0; i < person.skills.length; i++) {
  if (person.skills[i].includes('j') === false) {
    message = message + `${person.skills[i]} `;
  }
}

console.log(message.trim());

console.warn('Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."')
message = 'Prietenii mei se numesc ';

for(i = 0; i < person.friends.length; i++) {
  
}