# math-extended
A math object that extends the functionalities of the built-in math object in javascript


math-extended is an extensive math library that has more useful functionalities than JavaScript's built-in Math object.

### Installation:

    npm i math-extended
<br/>

### Import:

    import { MATH } from 'math-extended';
<br/>
<br/>

## Contents:

- [Properties](#properties)
- [Methods](#methods)
- Objects
    - Arithmetics
    - Trig
    - Physics


#### Properties:
```ts
MATH.INFINTY //∞ - Infinity.

MATH.PI //π - The ratio of the circumference of a circle to its diameter.

MATH.PHI //Φ - The Golden Ratio.

MATH.E //The mathematical constant e. This is Euler's number, the base of natural logarithms.

MATH.ROOT_2 //The square root of 2. Approximately 1.414.

MATH.OneByRoot2 //The square root of 1/2. Approximately 0.707.
```
<br/>

#### Methods:
```ts
MATH.degToRad(90);
//Converts the angle in degrees to radians.
//Output: 1.5707963267948966.

MATH.radToDeg(2.73);
//Converts the angle in radians to degrees.
//Output: 156.41747807071474

MATH.moveDecimal(2466.592, -2);
//Moves the decimal by the number of steps.
//Output: 24.66592.

MATH.randomIntFromRange(10, 100);
//Returns a random floating-point number within the specified range.
//Output: 81.08787125521943.

MATH.randomIntFromZeroToRange(35);
//Returns a random floating-point number between 0 and the range.
//Output: 21.73460810146525.

MATH.getDistance(10, 6, 73, 90);
//Returns the distance between two points in pixels
//Output: 105.

MATH.solveQuadraticEquation(3, 12, -9);
//Returns an object containing the roots of the equation.
//Output: 
    {root1: 0.6457513110645907, root2: -4.645751311064591}

MATH.map(26, 0, 30, 0, 100);
//Maps the value from one range to another range.
//Output: 86.66666666666667.

MATH.clamp(500, 10, 100);
//Output: 100;
//Limits the value x to the bounds of that min and max values.

MATH.lerp(0, 100, 0.653187);
//Output: 65.31869999.
//Interpolates a value within the range based on x.
```

<br/>
There are many other methods like min(), max(), floor(), sign(), etc. which are already present in the built-in JavaScript's Math object. Only the extended functions are included in the documentation.