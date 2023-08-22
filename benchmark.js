function benchmark(fn, iterations) {
  const start = Date.now();
  for (let i = 0; i < iterations; i++) {
    fn(i);
  }
  return Date.now() - start;
}

module.exports = benchmark;
