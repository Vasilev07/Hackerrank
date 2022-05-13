function compareTriplets(a, b) {
    let aliceRes = 0;
    let bobRes = 0;

    for (let i = 0; i < a.length; i ++) {
        if (a[i] > b[i]) {
            aliceRes += 1;
        } else if (a[i] < b[i]) {
            bobRes += 1;
        }
    }

    return [aliceRes, bobRes];
}