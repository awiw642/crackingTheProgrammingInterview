// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// For example,
// Given the following matrix:

// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// You should return [1,2,3,6,9,8,7,4,5].

const spiralMatrix = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }
  const result = [];
  let startRow = 0;
  let startCol = 0;
  let endRow = matrix.length - 1;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let x = startCol; x <= endCol; x++) {
      result.push(matrix[startRow][x]);
    }
    startRow++;

    for (let y = startRow; y <= endRow; y++) {
      result.push(matrix[y][endCol]);
    }
    endCol--;

    if (startRow <= endRow) {
      for (let z = endCol; z >= startCol; z--) {
        result.push(matrix[endRow][z]);
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let p = endRow; p >= startRow; p--) {
        result.push(matrix[p][startCol]);
      }
      startCol++;
    }
  }

  return result;
};

module.exports = spiralMatrix;
