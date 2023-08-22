function doubleMethod(n) {
  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.unshift(i);
  }
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

module.exports = doubleMethod;
