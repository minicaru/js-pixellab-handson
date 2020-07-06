var person = {
  name: 'Alexandru',
  surname: 'Minicaru',
  age: 33,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
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

console.warn('Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.');
var message = '';

person.skills.forEach(function (skill, i){
  if (i % 2 !== 0) {
    message += skill + ' ';

  }
  
});

console.log(message.trim());

console.warn('In mod similar, afiseaza skillurile care contin litera a.');
message = '';

person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    message += `${skill} `;
  }
});

console.log(message.trim());

console.warn('Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."');
message = 'Prietenii mei se numesc ';

person.friends.forEach(function (friend, i, friends) {
  var punctuation = ', ';
  var friendsLength = friends.length;

  message += `${friend.name} ${friend.surname}`;

  if (i === friendsLength - 2) {
    punctuation = ' si ';
  }

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);

console.warn('Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.');
var totalAge = 0;

person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    totalAge += friend.age;
  }
});

console.log(totalAge);

console.warn('Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara. ');
var totalYears = 0;

person.friends.forEach(function(friend){
  var friendAge = friend.age;
  var birthYear = (new Date(Date.now()).getFullYear()) - friendAge;

  if (friendAge % 2!== 0) {
    totalYears += birthYear;
  }
});

console.log(totalYears);