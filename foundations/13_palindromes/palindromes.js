const palindromes = function (palindrome) {
    //paste word into new array but reversed and compare them

    const reversed = palindrome
                    .split('')
                    .reverse()
                    .join('')
                    .filter((char) => {
                        if (char === '!' || char === '?' || char === '.') {
                            return -1;
                        }
                    });

    if (palindrome.toLowerCase() === reversed.toLowerCase()) {
        return true;
    }
    else 
        return false;
};

// Do not edit below this line
module.exports = palindromes;
