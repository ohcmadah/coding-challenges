const solution = require("../coding-test-for-finding-jobs/연구소");

const map1 = [
  "2 0 0 0 1 1 0",
  "0 0 1 0 1 2 0",
  "0 1 1 0 1 0 0",
  "0 1 0 0 0 0 0",
  "0 0 0 0 0 1 1",
  "0 1 0 0 0 0 0",
  "0 1 0 0 0 0 0",
];
test("지도가 다음과 같을 때, 안전 영역의 최댓값: 27\n" + map1.join("\n"), () => {
  expect(solution(7, 7, map1)).toBe(27);
});

const map2 = ["0 0 0 0 0 0", "1 0 0 0 0 2", "1 1 1 0 0 2", "0 0 0 0 0 2"];
test("지도가 다음과 같을 때, 안전 영역의 최댓값: 9\n" + map2.join("\n"), () => {
  expect(solution(4, 6, map2)).toBe(9);
});

const map3 = [
  "2 0 0 0 0 0 0 2",
  "2 0 0 0 0 0 0 2",
  "2 0 0 0 0 0 0 2",
  "2 0 0 0 0 0 0 2",
  "2 0 0 0 0 0 0 2",
  "0 0 0 0 0 0 0 0",
  "0 0 0 0 0 0 0 0",
  "0 0 0 0 0 0 0 0",
];
test("지도가 다음과 같을 때, 안전 영역의 최댓값: 3\n" + map3.join("\n"), () => {
  expect(solution(8, 8, map3)).toBe(3);
});
