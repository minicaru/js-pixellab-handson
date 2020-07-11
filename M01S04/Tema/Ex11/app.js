var person = {
  name: 'Alex',
  surname: 'Minicaru',
  age: 33,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false
  },
  friends: {
    larry:{
      name:'Larry',
      surname: 'Larryson',
      age:30
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  }
};

console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.');
var message = '';

Object.keys(person.skills).forEach(function(skillName){
  message += `${skillName} `;
});

console.log(message.trim());

console.warn('Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.');
var message = '';
var friendsKeysNames = Object.keys(person.friends);

friendsKeysNames.forEach(function(friendKey, i, friends){
  var friend = (person.friends[friendKey]);
  var punctuation = ', ';

  message += `${friend.name} ${friend.surname}`;

  if (i === friends.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);

console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()');
var message = 'Prietenii mei sunt ';
var friendsKeysNames = Object.keys(person.friends);

friendsKeysNames.forEach(function(friendKey, i, friends){
  var friend = (person.friends[friendKey]);
  var punctuation = ', ';

  message += `${friend.name} ${friend.surname}`;

  if (i === friends.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);

console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”');
var message = ' ';
