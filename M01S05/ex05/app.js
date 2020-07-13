let person = {
  getName: function () {
    return 'Alexandru Minicaru';
  },
  getAge: function () {
    return 33;
  }
};

console.warn('Afiseaza primul nume al persoanei folosind metoda getName()');
str = person.getName;

const words = str.split (' ');
console.log(words[1]);