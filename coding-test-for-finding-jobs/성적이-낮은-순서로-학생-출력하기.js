const solution = (N, students) => {
  const grades = students.split("\n").reduce((acc, student) => {
    const [name, grade] = student.split(" ");
    return [...acc, [name, grade]];
  }, []);
  return grades.sort(([_an, a], [_bn, b]) => a - b).map(([name, _]) => name);
};

module.exports = solution;
