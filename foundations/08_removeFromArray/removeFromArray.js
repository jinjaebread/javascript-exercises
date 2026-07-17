const removeFromArray = function(arr, ...args) {
    //num will determine what will be removed from arr
    
    //Iterate through arr
        //Check through each parameter to see if it matches with what's in the array
            //If found remove that value/index from the array
            //Else just keep iterating
    
    //Filter iterates through the entire array


    //[1, 2, 3, 4, 5, 5]
    //c = 5, a = 1

    return arr.filter((item) => !args.includes(item));
    
};


// Do not edit below this line
module.exports = removeFromArray;
