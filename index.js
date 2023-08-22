const closedForm = require('./algorithms/closedForm');
const doubleMethod = require('./algorithms/doubleMethod');
const iterative = require('./algorithms/iterative');
const recursive = require('./algorithms/recursive');
const benchmark = require('./benchmark');

function runBenchmark(power, iterations) {
  const iterationValues = new Array(power)
    .fill(1)
    .map((_, index) => 1000 * (2 ** (power - 1 - index)))
    .toReversed();

  const benchmarkFunctions = [doubleMethod, iterative, recursive, closedForm];

  const benchmarkResults = benchmarkFunctions.map((func) => {
    const iterationData = iterationValues.map((value) => {
      const time = benchmark(func, value, iterations);
      return {
        name: func.name,
        value,
        iterations,
        time,
      };
    });

    const dataWithRatio = iterationData.map((data, index) => {
      if (index === 0 || iterationData[index - 1].time === 0) return { ...data, ratio: 0 };

      const ratio = data.time / iterationData[index - 1].time;
      return {
        ...data,
        ratio: ratio.toFixed(2),
      };
    });

    return dataWithRatio;
  });

  benchmarkResults.forEach((result) => {
    console.table(result);
  });
}

runBenchmark(6, 1000);
