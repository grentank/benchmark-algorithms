function benchmark(fn, value, iterations) {
  try {
    const start = Date.now();
    for (let i = 0; i < iterations; i++) {
      fn(value);
    }
    return Date.now() - start;
  } catch (error) {
    return -1;
  }
}

module.exports = benchmark;
