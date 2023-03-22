const solution = require("../coding-test-for-finding-jobs/부품-찾기");

test("", () => {
  expect(solution(5, "8 3 7 9 2", 3, "5 7 9")).toEqual(["no", "yes", "yes"]);
});
