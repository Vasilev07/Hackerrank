function diagonalDifference(arr) {
    const leftDiagonalSum = calculateLeftDiagonalSum(arr);
    const rightDiagonalSum = calculateRightDiagonalSum(arr);

    function calculateLeftDiagonalSum(matrix) {
        let leftDiagonalSum = 0;

        for (let i = 0; i < matrix.length; i++) {
            leftDiagonalSum += matrix[i][i];
        }

        return leftDiagonalSum;
    }

    function calculateRightDiagonalSum(matrix) {
        let rightDiagonalSum = 0;

        for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
            rightDiagonalSum += matrix[i][j];
        }

        return rightDiagonalSum;
    }

    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}