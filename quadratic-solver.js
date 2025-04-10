function solveQuadratic(a, b, c) {
    if (a === 0) {
        throw new Error("a ≠ 0 bo'lishi kerak");
    }

    const D = b ** 2 - 4 * a * c;
    if (D < 0) {
        return "There is no solution";
    } else if (D === 0) {
        const x = -b / (2 * a);
        return [x];
    } else {
        const sqrtD = Math.sqrt(D);
        const x1 = (-b + sqrtD) / (2 * a);
        const x2 = (-b - sqrtD) / (2 * a);
        return [x1, x2];
    }
}

module.exports = solveQuadratic;