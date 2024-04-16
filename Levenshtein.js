const Levenshtein = {
    distance(a, b) {
        if (a === b) return 0;
        
        const i = a.length;
        const j = b.length;
        
        if (Math.min(i, j) === 0) {
            return Math.max(i, j);
        } else if (this.head(a) === this.head(b)) {
            return this.distance(this.tail(a), this.tail(b));
        } else {
            return 1 + Math.min(
                this.distance(this.tail(a), b),
                this.distance(a, this.tail(b)),
                this.distance(this.tail(a), this.tail(b))
            );
        }
    },
    tail(s) {
        return s.substring(1);
    },
    head(s) {
        return s[0];
    }
};

// Faster
export function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1] + (str1[i - 1] !== str2[j - 1] ? 1 : 0),
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1
                );
            }
        }
    }
    return dp[m][n];
}


export default Levenshtein;
