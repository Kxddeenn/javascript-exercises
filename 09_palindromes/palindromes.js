const palindromes = function (string) {

    initialString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    reverseString = "";

    for( i = initialString.length-1 ; i >= 0 ; i--){
        reverseString += initialString[i];
    }

    if (initialString === reverseString){
        return true;
    }

    else{
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
