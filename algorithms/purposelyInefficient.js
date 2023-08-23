function purposelyInefficient(n) {
  let numbers = [];
  for (let i = 0; i < n; i++) {
    numbers = [...numbers, i];
  }
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum += element;
  }
  return sum;
}

module.exports = purposelyInefficient;
