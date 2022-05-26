/*3. Создать переменные следущих типов: number, string, boolean, undefinded и вывести их в консоль с помощью команды console.log();*/

let num = 5;
let str = "string";
let bool = true;
let und;
let arr = [1, "sr", true]

console.log(num, str, bool, und, arr);

/*4. Создать константу и вывести ее в консоль.
*/
const p = 2.48;
console.log(p);

/*5. Написать три вида циклов: while, do while, for
*/
// while
let i = 5;
while (i > 0) {
  console.log(i);
  i--;
}

// do wile
let j = 0;
do {
  console.log(j);
  ++j;
} while (j <= 5);

// for
for (let i = 0; i < 4; i++){
  console.log(i);

  if (i === 2)
  {
    continue;
}
}

/*6. Фак>ультатитвно: написать оператор swithc case
*/
let t = -25;
switch (t) {
  case -5: console.log('cold');
    break;
  case 15: console.log('warm');
    break;
  case 35: console.log('hot')
    break;
  default: console.log('no information')
}
