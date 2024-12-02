/**
 * 1780. Check if Number is a Sum of Powers of Three
 * https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/
 * Difficulty: Medium
 *
 * Given an integer n, return true if it is possible to represent n as the sum
 * of distinct powers of three. Otherwise, return false.
 *
 * An integer y is a power of three if there exists an integer x such that y == 3x.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
  while (n) {
    if (n % 3 === 2) {
      return 0;
    }
    n = n / 3 >> 0;
  }
  return 1;
};


solution 2

function checkPowersOfThree(n) {
  // Iterate until n becomes 0
  while (n > 0) {
    if (n % 3 === 2) {
      return false; // If a remainder of 2 exists, it's not possible to represent n
    }
    n = Math.floor(n / 3); // Reduce n by dividing it by 3
  }
  return true; // If n becomes 0, the representation is possible
}
