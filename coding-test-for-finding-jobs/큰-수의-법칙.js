const solution = (m, k, numbers) => {
  const [first, second] = numbers.sort((a, b) => b - a);
  const count = Math.floor(m / (k + 1)) * k + (m % (k + 1));
  return first * count + second * (m - count);
};

const answer = solution(8, 3, [2, 4, 5, 4, 6]);
console.log(answer);
