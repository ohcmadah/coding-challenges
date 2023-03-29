const floor = (x) => Math.floor(x);

const solution = (x) => {
  const d = new Array(30001).fill(0);

  for (let i = 2; i < x + 1; i++) {
    d[i] = d[i - 1] + 1;
    if (i % 2 === 0) {
      d[i] = Math.min(d[i], d[floor(i / 2)] + 1);
    }
    if (i % 3 === 0) {
      d[i] = Math.min(d[i], d[floor(i / 3)] + 1);
    }
    if (i % 5 === 0) {
      d[i] = Math.min(d[i], d[floor(i / 5)] + 1);
    }
  }

  return d[x];
};

module.exports = solution;
