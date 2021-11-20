interface TrigFunctions {
    /**
     * Returns the sine of a number.
     * @param x - A numeric expression or an angle measured in radians.
     */
    sin(x: number): number;
    /**
     * Returns the cosine of a number.
     * @param x - A numeric expression or an angle measured in radians.
     */
    cos(x: number): number;
    /**
     * Returns the tangent of a number.
     * @param x - A numeric expression or an angle measured in radians.
     */
    tan(x: number): number;
    /**
     * Returns the arcsine (or inverse of sine) of a number.
     * @param x - A numeric expression.
     */
    asin(x: number): number;
    /**
     * Returns the arc cosine (or inverse of cosine) of a number.
     * @param x - A numeric expression.
     */
    acos(x: number): number;
    /**
     * Returns the arctangent (or inverse of tangent) of a number.
     * @param x - A numeric expression.
     */
    atan(x: number): number;
    /**
     * Returns the hyperbolic sine of a number.
     * @param x - A numeric expression or an angle measured in radians.
     */
    sinh(x: number): number;
    /**
     * Returns the hyperbolic cosine of a number.
     * @param x - A numeric expression or an angle measured in radians.
     */
    cosh(x: number): number;
    /**
     * Returns the hyperbolic tangent of a number.
     * @param x - A numeric expression or an angle measured in radians.
     */
    tanh(x: number): number;
    /**
     * Returns the inverse sine tangent of a number.
     * @param x - A numeric expression or an angle measured in radians.
     */
    asinh(x: number): number;
    /**
     * Returns the inverse cosine tangent of a number.
     * @param x - A numeric expression or an angle measured in radians.
     */
    acosh(x: number): number;
    /**
     * Returns the inverse hyperbolic tangent of a number.
     * @param x - A numeric expression or an angle measured in radians.
     */
    atanh(x: number): number;
}
interface Arithmetics {
    /**
     * Adds all the given arguments and returns the result.
     * @param args - Numeric expressions.
     */
    add(...args: number[]): number;
    /**
     * Subtracts all the given arguments and returns the result.
     * @param args - Numeric expressions.
     */
    sub(...args: number[]): number;
    /**
     * Multiplies all the given arguments and returns the result.
     * @param args - Numeric expressions.
     */
    mul(...args: number[]): number;
    /**
     * Divides all the given arguments and returns the result.
     * @param args - Numeric expressions.
     */
    div(...args: number[]): number;
    /**
     *
     * @param base - The base value of the expression.
     * @param exponent - The exponent value of the expression.
     */
    pow(base: number, exponent: number): number;
}
interface Physics {
    /**G - The universal gravitational constant. */
    readonly G: number;
    /**c - The speed of light in vacuum in  m/s. */
    readonly c: number;
    /**h - Plank's constant. */
    readonly h: number;
    /**h - Avogadro's constant. */
    readonly n: number;
    /**The acceleration due to gravity on the planets of our solar system. */
    readonly gravity: {
        /**The acceleration due to gravity on Mercury */
        readonly mercury: number;
        /**The acceleration due to gravity on Venus */
        readonly venus: number;
        /**The acceleration due to gravity on Earth */
        readonly earth: number;
        /**The acceleration due to gravity on Mars */
        readonly mars: number;
        /**The acceleration due to gravity on Jupiter */
        readonly jupiter: number;
        /**The acceleration due to gravity on Saturn */
        readonly saturn: number;
        /**The acceleration due to gravity on Uranus */
        readonly uranus: number;
        /**The acceleration due to gravity on Neptune */
        readonly neptune: number;
        /**The acceleration due to gravity on Pluto */
        readonly pluto: number;
    };
}
export interface math {
    /**∞ - Infinity */
    readonly infinity: number;
    /**π. This is the ratio of the circumference of a circle to its diameter. */
    readonly PI: Math['PI'];
    /** Φ - The Golden Ratio */
    readonly PHI: number;
    /**The mathematical constant e. This is Euler's number, the base of natural logarithms. */
    readonly E: Math['E'];
    /**The square root of 2. Approximately 1.414. */
    readonly ROOT_2: number;
    /**The square root of 1/2. Approximately 0.707. */
    readonly OneByRoot2: number;
    /**
     * Returns the largest value from an array of numbers.
     * @param values Numeric expressions to be evaluated.
     */
    max(...values: number[]): number;
    /**
     * Returns the smallest value from an array of numbers.
     * @param values Numeric expressions to be evaluated.
     */
    min(...values: number[]): number;
    /**
     * Returns a pseudo-random number between 0 to 1
     */
    random(): number;
    /**
     * Converts an angle in degrees to radians.
     * @param x - degree to be converted.
     */
    degToRad(x: number): number;
    /**
     * Converts an angle in radians to degrees.
     * @param x - degree to be converted.
     */
    radToDeg(x: number): number;
    /**
     * Returns a random number between the specified range.
     * @param min - minimum range.
     * @param max - maximum range.
     */
    randomIntFromRange(min: number, max: number): number;
    /**
     * Returns a random number between 0 and the specified range.
     * @param range - maximum range.
     */
    randomIntFromZeroToRange(range: number): number;
    /**
     * Returns the distance between two points in pixels.
     * @param x1 - x-coordinate of first point.
     * @param y1 - y-coordinate of first point.
     * @param x2 - x-coordinate of second point.
     * @param y2 - y-coordinate of second point.
     */
    getDistance(x1: number, y1: number, x2: number, y2: number): number;
    /**
     * Maps the value from one range to another range and returns it.
     * @param value - value to be converted.
     * @param min - lower bound of the value's current range.
     * @param max - upper bound of the value's current range.
     * @param minRange - lower bound of the value's target range.
     * @param maxRange - upper bound of the value's target range.
     */
    map(value: number, min: number, max: number, minRange: number, maxRange: number): number;
    /**
     * Returns a value between 0 and 1 which denotes if the x is closer to value a or value b.
     * @param a - The first value.
     * @param b - The second value
     * @param x - Amount to be interpolated.
     * This value must be in the range a < x < b.
     */
    lerp(a: number, b: number, x: number): number;
    /**
     * Limits the value x to the bounds of that min and max values.
     *
     * If x is already in the bound, the output is just x.
     * @param x - The value to be clamped.
     * @param min - Minumum range of x.
     * @param max - Maximum range of x.
     */
    clamp(x: number, min: number, max: number): number;
    /**
     * Moves the decimal point to the left by the number of steps.
     *
     * For example an input like (x: 3461.54, steps: 3) will return 3.46154.
     *
     * @param x - A numberic expression.
     * @param steps - Number of steps to move the decimal point.
     */
    moveDecimalToLeft(x: number, steps: number): number | void;
    /**
     * Return the two roots of the equation in the form of a javascript object.
     * @param a - The coefficient of x^2 and it is not equal to zero.
     * @param b - The coefficient of x.
     * @param c - The constant term.
     */
    solveQuadraticEquation(a: number, b: number, c: number): {
        root1: number;
        root2: number;
    };
    /**
     * Rounds the value to the nearest integer and returns it.
     * @param x - number to be rounded.
     */
    round(x: number): number;
    /**
     * Returns the largest integer less than or equal to the given number.
     * @param x - a floating-point number.
     */
    floor(x: number): number;
    /**
     * Returns the largest integer greater than or equal to the given number.
     * @param x - a floating-point number.
     */
    ceil(x: number): number;
    /**
     * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
     * @param x - a floating-point number or an integer.
     */
    abs(x: number): number;
    /**Contains basic trigonometric functions */
    trig: TrigFunctions;
    /**Contains basic physics constants and functionalities */
    physics: Physics;
    /**Contains basic Arithmetic functions like addition, subtraction, etc. */
    arithmetics: Arithmetics;
    /**
     * Returns whether the given number is positive, negative or zero.
     * @param x - A numeric expression to be evaluated.
     */
    sign(x: number): number;
    /**
     * Returns the square root of the number.
     * @param x - A numeric expression.
     */
    sqrt(x: number): number;
    /**
     * Return the natural log (base e) of the number.
     * @param x - A numeric expression.
     */
    log(x: number): number;
}
export {};
