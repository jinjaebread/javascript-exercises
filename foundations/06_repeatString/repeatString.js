const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }
    let word = "";
    while(num > 0) {
        word = word + str;
        num--;
    }
    return word;
};

repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;
