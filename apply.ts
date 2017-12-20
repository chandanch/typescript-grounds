/**
 * @desc Apply method: apply()
 * similar to call with first argument as the value of this
 * and the second argument as the array
 * The value of first argument must be given as null in strict mode
 */

let scores = [12, 34, 45, 56, 44, 78, 88, 99];
const highScore = Math.max.apply(null, scores);
alert(`High Score is ${highScore}`);
