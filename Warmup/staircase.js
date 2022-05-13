function staircase(n) {
    for (let i = 1, j= n - 1; i <= n; i++, j--) {
        const emptyStrings = ' '.repeat(j);
        const hashtags = '#'.repeat(i);
        console.log(`${emptyStrings}${hashtags}`);
    }
}

staircase(6);