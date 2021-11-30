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
- Methods
- Objects
    - Arithmetics
    - Trig
    - Physics


#### Properties: {#properties}

    MATH.infinity //∞ - Infinity.

    MATH.PI //π - The ratio of the circumference of a circle to its diameter.

    MATH.PHI //Φ - The Golden Ratio.

    MATH.E //The mathematical constant e. This is Euler's number, the base of natural logarithms.

    MATH.ROOT_2 //The square root of 2. Approximately 1.414.

    MATH.OneByRoot2 //The square root of 1/2. Approximately 0.707.

<br/>

#### Methods: {#methods}
    MATH.degToRad(90);
    //Converts the angle in degrees to radians.
    //Output: 1.5707963267948966.

    MATH.radToDeg(2.73);
    //Converts the angle in radians to degrees.
    //Output: 156.41747807071474

    moveDecimalToLeft(2466.592, 2);
    //Output: 24.66592.
    //To move the decimal to the right pass a negative integer as an argument to the second parameter.
<!-- 
    solveQuadraticEquation(3, 12, -9);
    //Output: {
        root1: 
    } -->

<br/>
There are many other methods like min(), max(), floor(), etc. which are already present in the built-in JavaScript's Math object.