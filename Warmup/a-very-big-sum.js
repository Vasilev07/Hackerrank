function aVeryBigSum(ar) {
    return ar.reduce((prev, acumulator) => {
        return acumulator += prev;
    }, 0);
}