const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }
    let string = ""; //declare a variable with value of "" no spaces in order to join the words given
    for (let i = 0; i < times; i++) {
        string += word; // string = string("") + word
    }
    return string;
};
// Do not edit below this line
module.exports = repeatString;
