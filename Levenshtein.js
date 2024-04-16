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

export default Levenshtein;