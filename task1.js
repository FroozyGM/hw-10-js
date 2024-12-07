const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`); // 253