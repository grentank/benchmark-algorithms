const benchmark = require('./benchmark');
const calculateRatio = require('./calculateRatio');

function runBenchmarks(functions, values, iterations) {
  return functions.map((func) => {
    const iterationData = values.map((value) => {
      const time = benchmark(func, value, iterations);
      return {
        name: func.name,
        value,
        iterations,
        time,
      };
    });

    const dataWithRatio = calculateRatio(iterationData);

    return dataWithRatio;
  });
}
module.exports = runBenchmarks;
