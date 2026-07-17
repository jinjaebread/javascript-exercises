const leapYears = function(year) {
    //I think it's two conditions
    //Divisible by 4 and not divisible by 100 OR Divisible by 400 and not divisible by 100
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
