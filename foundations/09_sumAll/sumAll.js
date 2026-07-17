const sumAll = function(a, b) {

    if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }


    let maxNum = Math.max(a, b);
    let minNum = Math.min(a, b);

    let result = 0;
    while (minNum <= maxNum) {
        result = result + minNum;
        minNum++;
    }
    return result;


};

    //This problem sounds like it uses reduce
    //I need the sum of all values between two positive integers
    
    //Example
    //sumAll (1, 5) means 1 + 2 + 3 + 4 + 5 = 15

    //Take the largest of the positive nums which is b, and iterate from the smallest of the nums a and go up from there?
    //I am stupid, reduce already does that with its first parameter being an accumulator

    //Wait that thought process doesn't make sense, because we are not given an array, but instead just two values

// Do not edit below this line
module.exports = sumAll;
