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

const answer = solution(25, 5);
console.log(answer);
