function recursive(n) {
  if (n <= 0) return 0;
  return n + recursive(n - 1);
}

module.exports = recursive;
