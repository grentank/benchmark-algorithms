const closedForm = require('./algorithms/closedForm');
const doubleMethod = require('./algorithms/doubleMethod');
const iterative = require('./algorithms/iterative');
const purposelyInefficient = require('./algorithms/purposelyInefficient');
const recursive = require('./algorithms/recursive');
const runBenchmarks = require('./utils/runBenchmarks');

function runBenchmark(power, iterations) {
  const iterationValues = new Array(power)
    .fill(1)
    .map((_, index) => 100 * (2 ** (power - 1 - index)))
    .toReversed();

  const benchmarkFunctions = [purposelyInefficient, doubleMethod, recursive, iterative, closedForm];

  const benchmarkResults = runBenchmarks(benchmarkFunctions, iterationValues, iterations);

  benchmarkResults.forEach((result) => {
    const nonZeroProduct = result.reduce((acc, oneTest) => (Math.abs(oneTest.ratio) <= 1
      ? acc : oneTest.ratio * acc), 1);
    const nonZeroAmount = result.filter((oneTest) => Math.abs(oneTest.ratio) > 1).length;
    const geometricMean = nonZeroProduct ** (1 / nonZeroAmount);
    console.log(`Benchmarking ${result[0].name}\nGeometric mean: ${geometricMean.toFixed(3)}\n`);
    console.table(result);
    console.log('\n');
  });
}

const powersOfValue = 8;
const iterations = 500;

runBenchmark(powersOfValue, iterations);
