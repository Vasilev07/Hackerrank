function miniMaxSum(arr) {
    let currentMin = 0;
    let currentMax = 0;

    function sumNumbers(numers) {
        return numers.reduce((prev, current) => prev += current, 0);
    }

    function getAllNumbersExceptCurrent(numbers, current) {
        return numbers.filter((num) => num !== current);
    }

    arr.forEach((number) => {
        const arrayWithRemovedCurrentNumber = getAllNumbersExceptCurrent(arr, number);
        const sumWithRemovedCurrentNumber = sumNumbers(arrayWithRemovedCurrentNumber);

        if (sumWithRemovedCurrentNumber > currentMax) {
            currentMax = sumWithRemovedCurrentNumber;
        }

        if (sumWithRemovedCurrentNumber < currentMin) {
            currentMax = sumWithRemovedCurrentNumber;
        }
    });

    console.log(currentMax, currentMin);
}

const res = miniMaxSum([1,3,5,7,9]);
console.log(res);