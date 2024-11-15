/**
 * 2482. Difference Between Ones and Zeros in Row and Column
 * https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/
 * Difficulty: Medium
 *
 * You are given a 0-indexed m x n binary matrix grid.
 *
 * A 0-indexed m x n difference matrix diff is created with the following procedure:
 * - Let the number of ones in the ith row be onesRowi.
 * - Let the number of ones in the jth column be onesColj.
 * - Let the number of zeros in the ith row be zerosRowi.
 * - Let the number of zeros in the jth column be zerosColj.
 * - diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
 *
 * Return the difference matrix diff.
 */
//solution one.

function differenceMatrix(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const onesRow = Array(m).fill(0);
    const zerosRow = Array(m).fill(0);
    const onesCol = Array(n).fill(0);
    const zerosCol = Array(n).fill(0);

    // Count ones and zeros in each row and column
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                onesRow[i]++;
                onesCol[j]++;
            } else {
                zerosRow[i]++;
                zerosCol[j]++;
            }
        }
    }

    // Create the diff matrix
    const diff = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return diff;
}

// Example usage
const grid = [[0,1,1],[1,0,1],[0,0,1]];
console.log(differenceMatrix(grid)); // Output: [[0,0,4],[0,0,4],[-2,-2,2]]

/**
solution2
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
  const rows = new Array(grid.length).fill(0);
  const columns = new Array(grid[0].length).fill(0);

  grid.forEach((row, r) => row.forEach((value, c) => {
    rows[r] += value;
    columns[c] += value;
  }));

  grid.forEach((row, r) => row.forEach((value, c) => {
    grid[r][c] = 2 * rows[r] - grid.length + 2 * columns[c] - row.length;
  }));

  return grid;
};
