module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  const pairOfBrackets = {};
  const openingBrackets = [];

  bracketsConfig.forEach((pair) => {
    pairOfBrackets[pair[1]] = pair[0];
    openingBrackets.push(pair[0]);
  });

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.includes(str[i])) {
      if (pairOfBrackets[str[i]] === stack[stack.length - 1] && stack.length !== 0) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else if (pairOfBrackets[str[i]] === stack[stack.length - 1]) {
      stack.pop();
    }
  }
  return stack.length === 0;
};
