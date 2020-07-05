var friends = [
  {
    name: 'Alexandru',
    surname: 'Minicaru'
  },
  {
    name: 'Larry',
    surname: 'Larryson'
  },
  {
    name: 'Steven',
    surname: 'Stevenson'
  },
  {
    name: 'Carol',
    surname: 'Carolson'
  },
  {
    name: 'Andra',
    surname: 'Andrason'
  }
];

console.warn('Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.');
var message = '';
var arrayLength = friends.length;
var i = 0;

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];

  message += `${friend.name}` + ' ';
}

console.log(message);

console.warn('Afiseaza numele complet al tuturor prietenilor.');
var message = '';

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];

  message += `${friend.name} ${friend.surname}` + ` `;

  if (friend.name === 'Andra') {
    message += '.';
  } else {
    message += ', ';
  }
}

console.log(message);

console.warn('Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9.');

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];

  if (friend.surname.length >= 9) {
    break;
  }

  console.log(`${friend.name} ${friend.surname}`);
}
