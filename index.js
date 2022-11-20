
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  }
  return sum(fromN, toN - 1) + toN;
}

module.exports = sum;
