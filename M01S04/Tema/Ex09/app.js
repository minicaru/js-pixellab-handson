var i = 1;

while (i < 52) {
  console.log(i);

  if (i === 12) {
    break;
  }

  i++;
}

console.log('Bucla noua');

var i = 7;

for (i = 7; i <= 32; i++) {

  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}