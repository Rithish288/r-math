/**MATH Object */
const MATH = {
    PI: Math.PI,
    PHI: 218922995834555169026 / 135301852344706746049,
    E: Math.E,
    infinity: Infinity,
    ROOT_2: Math.SQRT2,
    OneByRoot2: Math.SQRT1_2,
    max: Math.max,
    min: Math.min,
    random: Math.random,
    degToRad: (x) => x * MATH.PI / 180,
    radToDeg: (x) => (x * 180) / MATH.PI,
    randomIntFromRange: (min, max) => Math.random() * (max - min + 1) + min,
    randomIntFromZeroToRange: (range) => Math.floor(Math.random() * (range + 1)),
    getDistance: (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
    map: (value, min, max, minRange, maxRange) => (value - min) / (max - min) * (maxRange - minRange) + minRange,
    lerp: (a, b, x) => a + (b - a) * x,
    clamp: (x, min, max) => Math.max(min, Math.min(x, max)),
    moveDecimalToLeft: (x, steps) => Number.isInteger(steps) ? x / Math.pow(10, steps) : console.error("INT ERROR:" + " Steps must be an integer!"),
    solveQuadraticEquation: (a, b, c) => {
        const root1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
        const root2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
        return {
            root1: root1,
            root2: root2
        };
    },
    round: Math.round,
    floor: Math.floor,
    ceil: Math.ceil,
    abs: Math.abs,
    arithmetics: {
        add: (...args) => args.reduce((acc, ind) => acc + ind),
        sub: (...args) => args.reduce((acc, ind) => acc - ind),
        mul: (...args) => args.reduce((acc, ind) => acc * ind),
        div: (...args) => args.reduce((acc, ind) => acc / ind),
        pow: (base, exponent) => Math.pow(base, exponent)
    },
    trig: {
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        asin: Math.asin,
        acos: Math.acos,
        atan: Math.atan,
        sinh: Math.sinh,
        cosh: Math.cosh,
        tanh: Math.tanh,
        asinh: Math.asinh,
        acosh: Math.acosh,
        atanh: Math.atanh,
    },
    physics: {
        G: 6.67408 * Math.pow(10, -11),
        c: 299792458,
        h: 6.62607004 * Math.pow(10, 34),
        n: 6.02214 * Math.pow(10, 23),
        gravity: {
            mercury: ((6.67408 * Math.pow(10, -11) * (3.285 * Math.pow(10, 23))) / Math.pow(2439.7, 2)) / Math.pow(10, 6),
            venus: ((6.67408 * Math.pow(10, -11) * (4.867 * Math.pow(10, 24))) / Math.pow(6051.8, 2)) / Math.pow(10, 6),
            earth: ((6.67408 * Math.pow(10, -11) * (5.97219 * Math.pow(10, 24))) / Math.pow(6371, 2)) / Math.pow(10, 6),
            mars: ((6.67408 * Math.pow(10, -11) * (6.39 * Math.pow(10, 23))) / Math.pow(3389.5, 2)) / Math.pow(10, 6),
            jupiter: ((6.67408 * Math.pow(10, -11) * (1.898 * Math.pow(10, 27))) / Math.pow(69911, 2)) / Math.pow(10, 6),
            saturn: ((6.67408 * Math.pow(10, -11) * (5.683 * Math.pow(10, 26))) / Math.pow(58232, 2)) / Math.pow(10, 6),
            uranus: ((6.67408 * Math.pow(10, -11) * (8.681 * Math.pow(10, 25))) / Math.pow(25362, 2)) / Math.pow(10, 6),
            neptune: ((6.67408 * Math.pow(10, -11) * (1.024 * Math.pow(10, 26))) / Math.pow(24622, 2)) / Math.pow(10, 6),
            pluto: ((6.67408 * Math.pow(10, -11) * (1.30900 * Math.pow(10, 22))) / Math.pow(1188.3, 2)) / Math.pow(10, 6),
        }
    },
    sign: Math.sign,
    sqrt: Math.sqrt,
    log: Math.log,
};
export { MATH };
