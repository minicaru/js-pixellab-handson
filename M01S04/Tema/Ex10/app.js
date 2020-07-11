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

console.warn('Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.');
var message = '';

person.skills.forEach(function(skill, i){
  message += skill + ' ';
})

console.log(message.trim());

console.warn('In mod similar, afiseaza skillurile care nu incep cu j.');
message = '';

person.skills.forEach(function(skill){
  if (skill.includes('j') === false) {
    message += `${skill} `;
  }
});

console.log(message.trim());

console.warn('Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."');
message = 'Numele mari ale prietenilor mei sunt ';

person.friends.forEach(function(friend, i, friends){
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

console.warn('Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends ');
var totalAge = 0;

person.friends.forEach(function(friend) {
  totalAge += friend.age;
})

console.log(totalAge);

console.warn(' Folosind forEach, afiseaza suma anilor de nastere a persoanelor ');
var totalYears = 0;

person.friends.forEach(function(friend){
  var friendAge = friend.age;
  var birthYear = new Date().getFullYear() - friendAge;

  totalYears += birthYear;
});

console.log(totalYears);

console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.');

person.friends.forEach(function(friend){
  var ageDiff = person.age - friend.age;

  console.log(ageDiff);
});

console.warn(' Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.');
message = '';
person.friends.reverse();

person.friends.forEach(function(friend, i, friends){
  var punctuation = ', ';
  var friendName = person.friends[i].name;
  var friendSurname = person.friends[i].surname;
  message = message + `${friendName} ${friendSurname}` ;

  if (i === friends.length - 1) {
    punctuation = '.';
  } 

  message += punctuation;
});

console.log(message);
person.friends.reverse();