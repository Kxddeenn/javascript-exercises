const repeatString = function(string, num) {

    let stringRepeated = "";
    let stringError = "ERROR";
    if (num < 0 ){
        return stringError;
    
    }

    else {
    for (let i = 0 ; i < num ; i ++){
        stringRepeated += string;
    }

    return stringRepeated;
}
};




// Do not edit below this line
module.exports = repeatString;
