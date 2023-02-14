// 일반적으로 전체 데이터 개수가 100만 개 이하일 때 완전 탐색 사용하면 적절

const solution = (n) => {
  let count = 0;
  for (let h = 0; h <= n; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 0; s < 60; s++) {
        const isIncludesThree = ("" + h + m + s).includes("3");
        if (isIncludesThree) {
          count++;
        }
      }
    }
  }
  return count;
};

const answer = solution(5);
console.log(answer);
