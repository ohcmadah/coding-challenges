const solution = (m, k, numbers) => {
  const [first, second] = numbers.sort((a, b) => b - a);
  let answer = 0;
  let count = 0;
  while (m > 0) {
    if (count < k) {
      answer += first;
      count++;
    } else {
      answer += second;
      count = 0;
    }
    m--;
  }
  return answer;
};

const answer = solution(8, 3, [2, 4, 5, 4, 6]);
console.log(answer);
