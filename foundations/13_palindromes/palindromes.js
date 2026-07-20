const palindromes = function (palindrome) {
    //paste word into new array but reversed and compare them

    const cleanUp = palindrome
                        .toLowerCase()
                        .split(/[\s,.!]/)
                        .join('');

    const reversed = cleanUp
                    //.split(/[\s,.!]/)
                        .split('')
                        .reverse()
                        .join('');

    if (cleanUp === reversed) {
        return true;
    }
    else 
        return false;
};

// Do not edit below this line
module.exports = palindromes;
