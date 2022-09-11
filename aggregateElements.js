function aggregateElements(arr) {
  let numbersArray = arr.map(Number);
  let sum = numbersArray.reduce((a, b) => a + b);

  let inverseSum = 0;

  for (let element of numbersArray) {
    inverseSum += 1 / element;
  }
  let stringConcat = numbersArray.join('');

  console.log(sum);
  console.log(inverseSum);
  console.log(stringConcat);
}
aggregateElements([1, 2, 3])