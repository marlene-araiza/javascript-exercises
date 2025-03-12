const sumAll = function(firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) { // Number.isInteger() is a method used to check if a given value is an integer. "!" at the beginning is a logical NOT operator. It is used to invert the value of a boolean expression.
        return "ERROR";
    }

    if (firstNumber < 0 || secondNumber < 0){
        return "ERROR";
    }

    if (firstNumber>secondNumber){
        let range = 0;
        for (let i = secondNumber; i <= firstNumber; i++){
            range += i; 
        } 
        return range;
    }
    
    let range = 0;
    for (let i = firstNumber; i <= secondNumber; i++){
        range += i; 
    } 
    return range;
};

// Do not edit below this line
module.exports = sumAll;
