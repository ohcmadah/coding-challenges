const solution = require("../coding-test-for-finding-jobs/특정-거리의-도시-찾기");

test("출발 도시 1에서 최단 거리가 2인 모든 도시: 4", () => {
  expect(solution(4, 4, 2, 1, "1 2\n1 3\n2 3\n2 4")).toEqual([4]);
});

test("출발 도시 1에서 최단 거리가 2인 모든 도시: -1", () => {
  expect(solution(4, 3, 2, 1, "1 2\n1 3\n1 4")).toEqual(-1);
});

test("출발 도시 1에서 최단 거리가 1인 모든 도시: 2, 3", () => {
  expect(solution(4, 4, 1, 1, "1 2\n1 3\n2 3\n2 4")).toEqual([2, 3]);
});
