const readline = require('readline-sync');

let age;

do {
  age = Number(readline.question('Set age between 18 - 22: '));
} while (age < 18 || age > 22);


switch (age) {
  case 18:
  case 19:
  case 20:
  case 21:
    console.log(age + " : Young 😊");
    break;
  case 22:
    console.log(age + " : Old 😊");
    break;
  default:
    console.log("This should not happen");
}