const solution = (cards) => {
  let answer = 0;
  cards.forEach((row) => {
    const min = Math.min(...row);
    answer = Math.max(answer, min);
  });
  return answer;
};

const answer = solution([
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
]);
console.log(answer);
