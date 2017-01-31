'use strict';
// () => {} is an arrow function and are short-hand for function() {} (along with other benifts)
exports.squareRoot = (x) => {
    // Calculate the square root of x\ and return the results (without using Math.sqrt(x))
    // Additional info: most languages use * for multiplcation and / for division
    // Reference: http://www.w3schools.com/jsref/jsref_obj_math.asp
    // Concepts introduced: Calling a function
    return 0;
};

exports.piecewise = (x) => {
    // Return x + 1 where x < 5, x * 5 where x = 5 and x * 100 where num > 5
    // Additional info: == is the operator for is equal. Example: 10 + 1 == 11 evaulates to true
    // Reference: http://www.w3schools.com/js/js_comparisons.asp, http://www.w3schools.com/js/js_if_else.asp
    // Concepts introduced: Conditionals and logical operators
    if (x < 5) {
        return 0;
    }
    else if (x) {
        return 0;
    }
    else {
        return 0;
    }
};

exports.floor = (x) => {
    // Return what Math.floor(x) would return with using it
    // Additional info: 1.6 % 1 = 0.6
    // Reference: http://www.w3schools.com/jsref/jsref_floor.asp, http://www.w3schools.com/js/js_arithmetic.asp
    // Concepts introduced: Modulus
    return 0;
};
