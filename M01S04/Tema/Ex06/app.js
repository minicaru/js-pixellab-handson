var person = {
  name: 'Alexandru',
  surname: 'Minicaru',
  age: 32,
  petOwner: false,
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
      age: 30
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  ]
};

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana');
var message = '';
var i = 0;

for (i = 0; i < person.skills.length; i++) {
  message = message + ' ' + person.skills[i];
}

console.log(message.trim());

console.warn(' In mod similar, afiseaza skillurile care incep cu c');
var message = '';

for (i = 0; i < person.skills.length; i++) {
  if (person.skills[i][0] === 'c') {
    message = message + `${person.skills[i]}` +' ';
  }
}

console.log(message.trim());

console.warn('Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."');
var message = 'Numele de familie ale prietenilor mei sunt ';

for(i = 0; i < person.friends.length; i++){
var friendName = person.friends[i].name;
var friendSurname = person.friends[i].surname;
message = message + `${friendName} ${friendSurname}`;

if (i === person.friends.length - 1) {
  message += '.';
} else {
  message += ', ';
}
}

console.log(message);

console.warn('Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends');
var ageTotal = 0;

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  ageTotal += friend.age;
  message = `Numarul total de ani este: ${ageTotal}` ;
}

console.log(message);

console.warn('Folosind un for, afiseaza suma anilor de nastere ale persoanelor.');
var yearsTotal = 0;
var currentYear = new Date().getFullYear();

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendBirthYear = currentYear - friend.age;

  yearsTotal += friendBirthYear;
  message = `Suma anilor de nastere este : ${yearsTotal}`
}

console.log(message);

console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.');

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var diff = person.age - friend.age;

  message = `Diferenta de varsta dintre persoana si arrayul friends este ${diff}`
}

console.log(message);

console.warn('Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ".');
message = '';

for (i = 0; i < person.friends.length; i++ ) {
  var friend = person.friends[i];
  var diff = person.age - friend.age;

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
}

console.log(message.trim());

console.warn('Afiseaza fraza prietenii mei sunt xxx yyy, xxx yyy, xxx yyy in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).');
message = '';

for (i = person.friends.length - 1; i >= 0 ; i--) {
  message += person.friends[i].name + ' ' + person.friends[i].surname + ' ';
}

console.log(message.trim());