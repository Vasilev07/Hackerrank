function plusMinus(arr) {
    const signCounter = arr.reduce((previous, current) => {
        const currentSign = Math.sign(current);
        if (currentSign === 1) {
            const currentPositiveValue = previous.positive;
            previous = { ...previous, positive: currentPositiveValue + 1 };
        } else if (currentSign === -1) {
            const currentNegativeValue = previous.negative;
            previous = { ...previous, negative: currentNegativeValue + 1 };
        } else {
            const currentZeroValue = previous.zero;
            previous = { ...previous, zero: currentZeroValue + 1 };
        }

        return previous;
    }, {
        positive: 0,
        negative: 0,
        zero: 0
    });

    function getFixedResultWhenDivided(number) {
        return (number / arr.length).toFixed(6);
    }

    console.log(getFixedResultWhenDivided(signCounter.positive, arr.length));
    console.log(getFixedResultWhenDivided(signCounter.negative, arr.length));
    console.log(getFixedResultWhenDivided(signCounter.zero, arr.length));
}

plusMinus([1,1,0,-1,-1]);