const solution = (N, K) => {
  let count = 0;
  while (N !== 1) {
    count += N % K;
    N -= N % K;
    count += 1;
    N /= K;
  }
  return count;
};

module.exports = solution;
