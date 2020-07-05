var i = 1;

while (i < 67) {
  console.log(i);

  if (i === 12) {
    break;
  }

  i++;
}

console.log('Bucla noua');

for (i = 1; i <= 32; i++  ) {

  if(i % 2 != 0) {
  continue;
 }
 console.log(i);
}
