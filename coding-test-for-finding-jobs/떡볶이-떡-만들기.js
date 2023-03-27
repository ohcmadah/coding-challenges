const solution = (N, M, heights) => {
  heights = heights
    .split(" ")
    .map((n) => Number(n))
    .sort((a, b) => a - b);

  let h = 0;
  let start = 0;
  let end = heights[heights.length - 1];
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const total = heights.reduce((acc, height) => (height > mid ? acc + height - mid : acc), 0);
    if (total < M) {
      end = mid - 1;
    } else {
      h = mid;
      start = mid + 1;
    }
  }

  return h;
};

module.exports = solution;
