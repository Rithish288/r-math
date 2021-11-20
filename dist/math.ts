import { math } from './math-interface';
/**MATH Object */
const MATH: math = {
  PI: Math.PI,
  PHI: 218922995834555169026 / 135301852344706746049,
  E: Math.E,
  infinity: Infinity,
  ROOT_2: Math.SQRT2,
  OneByRoot2: Math.SQRT1_2,
  max: Math.max,
  min: Math.min,
  random: Math.random,
  degToRad: (x: number) => <number>x * MATH.PI/180,
  radToDeg: (x: number) => <number>(x * 180) / MATH.PI,
  randomIntFromRange: (min: number, max:number) => <number>Math.random() * (max - min + 1) + min,
  randomIntFromZeroToRange: (range: number) => <number>Math.floor(Math.random() * (range + 1)),
  getDistance: (x1: number, y1: number, x2: number, y2: number) => <number>Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)),
  map: (value: number, min: number, max: number, minRange: number, maxRange: number) => <number>(value - min) / (max - min) * (maxRange - minRange) + minRange,
  lerp: (a: number, b: number, x: number) => <number>a + (b - a) * x,
  clamp: (x, min, max) => <number> Math.max(min, Math.min(x, max)),
  moveDecimalToLeft: (x: number, steps: number) => Number.isInteger(steps)? <number>x / Math.pow(10, steps) : <void>console.error("INT ERROR:" + " Steps must be an integer!"),
  solveQuadraticEquation: (a: number, b: number, c: number) => {
    const root1 = (-b + Math.sqrt(b**2 - 4 * a * c)) / 2 * a;
    const root2 = (-b - Math.sqrt(b**2 - 4 * a * c)) / 2 * a;
    return {
      root1: root1,
      root2: root2
    }
  },
  round: Math.round,
  floor: Math.floor,
  ceil: Math.ceil,
  abs: Math.abs,
  arithmetics: {
    add: (...args: number[]) => args.reduce((acc: number, ind: number) => acc + ind),
    sub: (...args: number[]) => args.reduce((acc: number, ind: number) => acc - ind),
    mul: (...args: number[]) => args.reduce((acc: number, ind: number) => acc * ind),
    div: (...args: number[]) => args.reduce((acc: number, ind: number) => acc / ind),
    pow: (base: number, exponent: number) => base ** exponent
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
    G: 6.67408*Math.pow(10, -11),
    c: 299792458,
    h: 6.62607004 * 10**34,
    n: 6.02214 * 10**23,
    gravity: {
      mercury: ((6.67408*Math.pow(10, -11) * (3.285 * 10**23)) / 2439.7 ** 2) / Math.pow(10, 6),
      venus: ((6.67408*Math.pow(10, -11) * (4.867 * 10**24)) / 6051.8 ** 2) / Math.pow(10, 6),
      earth: ((6.67408*Math.pow(10, -11) * (5.97219 * 10**24)) / 6371 ** 2) / Math.pow(10, 6),
      mars: ((6.67408*Math.pow(10, -11) * (6.39 * 10**23)) / 3389.5 ** 2) / Math.pow(10, 6),
      jupiter: ((6.67408*Math.pow(10, -11) * (1.898 * 10**27)) / 69911 ** 2) / Math.pow(10, 6),
      saturn: ((6.67408*Math.pow(10, -11) * (5.683 * 10**26)) / 58232 ** 2) / Math.pow(10, 6),
      uranus: ((6.67408*Math.pow(10, -11) * (8.681 * 10**25)) / 25362 ** 2) / Math.pow(10, 6),
      neptune: ((6.67408*Math.pow(10, -11) * (1.024 * 10**26)) / 24622 ** 2) / Math.pow(10, 6),
      pluto: ((6.67408*Math.pow(10, -11) * (1.30900 * 10**22)) / 1188.3 ** 2) / Math.pow(10, 6),
    }
  },
  sign: Math.sign,
  sqrt: Math.sqrt,
  log: Math.log,
}
export {MATH};
