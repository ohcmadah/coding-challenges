const solution = (N, components, M, order) => {
  const set = new Set(components.split(" "));

  const result = order.split(" ").map((o) => {
    if (set.has(o)) {
      return "yes";
    }
    return "no";
  });

  return result;
};

module.exports = solution;
