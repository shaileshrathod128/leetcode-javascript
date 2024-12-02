/**
 * 1812. Determine Color of a Chessboard Square
 * https://leetcode.com/problems/determine-color-of-a-chessboard-square/
 * Difficulty: Easy
 *
 * You are given coordinates, a string that represents the coordinates of a square of
 * the chessboard. Below is a chessboard for your reference.
 *
 * Return true if the square is white, and false if the square is black.
 *
 * The coordinate will always represent a valid chessboard square. The coordinate will
 * always have the letter first, and the number second.
 */

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  const [x, y] = coordinates;
  return (x.charCodeAt() + +y) % 2 !== 0;
};

solution 2

var squareIsWhite = function(coordinates) {
    const startBlackChar = ['a', 'c', 'e', 'g'];
    const coords = coordinates.split('');

    if(startBlackChar.includes(coords[0])){
        return coords[1] % 2 === 0 ? true : false;
    } else {
        return coords[1] % 2 === 0 ? false : true;
    }

    
};

// console.log(findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]], 5));
console.log(squareIsWhite("c7"))
