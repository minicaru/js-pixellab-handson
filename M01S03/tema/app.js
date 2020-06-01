var person = {
  firstName: 'Alexandru',
  lastName: 'Minicaru',
  email:'minicaru.alexandru@yahoo.com',
  birthYear: '1987',
  zipCode: '077160',
  pets: [ {
     name: 'Amalia',
     species: 'labrador',
     age: '3'
  },
  {
     name: 'Alfonso',
     species: 'yorkshire',
     age: '5'
  },{
     name: 'Azorel',
     species: 'bichon',
     age: "2"
  },
  ]
}

console.warn('Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets.');
console.log('Numele meu este ' + person.firstName + ' ' + person.lastName + ' si am ' + person.pets.length + ' animale.');

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.');
console.log('Am acelasi email din copilarie: ' + person.email);

console.warn('Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”');
console.log('Unul din cele ' + person.pets.length + ' animale ale mele este ' + person.pets[0].species + ' si are ' + person.pets[0].age + ' ani.')

console.warn('Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.');
console.log(2020 - person.pets[2].age);

console.warn('Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.(varianta 2)');
var CurrentYear = new Date().getFullYear();
console.log(CurrentYear - person.pets[2].age);

console.warn('Calculeaza si salveaza in variabila "difference" diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent.');
var CurrentYear = new Date().getFullYear();
var difference = CurrentYear - person.birthYear - person.pets[0].age;
console.log(difference);

console.warn('Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.');
var petName = person.pets[0].name;
console.log(petName);

console.warn('Afiseaza propozitia: Intre firstName si petName este o diferenta de "difference" ani');
console.log('Intre ' + person.firstName + ' si ' + petName + ' este o diferenta de ' + difference + ' ani.');


document.getElementById('prop01').innerHTML = person.firstName + ', ' + 
   person.pets[0].name + ', ' + 
   person.pets[1].name + ', ' + 
   person.pets[2].name + ' locuiesc toti in aceeasi casa.';

document.getElementById('prop02').innerHTML = person.pets[0].age - person.pets[2].age;

document.getElementById('prop03').innerHTML = 'Ma numesc ' + person.firstName + ' ' + 
   person.lastName + ', m-am nascut in ' + 
   person.birthYear + ' si codul meu postal este ' + 
   person.zipCode + '.';
   
document.getElementById('prop04').innerHTML = 'Animalele mele s-au nascut in ' + 
   (CurrentYear - person.pets[0].age) + ', ' + 
   (CurrentYear - person.pets[1].age) + ', respectiv ' + 
   (CurrentYear - person.pets[2].age);

document.getElementById('prop05').innerHTML = 'Cu siguranta am gresit eu mai multe pe aici, astept cu nerabdare corectarea:D';