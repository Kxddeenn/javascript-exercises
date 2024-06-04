const fibonacci = function(number) {

    number = parseInt(number, 10);
   
    if (number < 0){
        return "OOPS";
    }

    else if (number === 0){
        return 0;
    }
    
    
    let fibonacciLine = [0,1];
    

    for( let i = 2 ; i <= number ; i++){
        fibonacciLine[i] = fibonacciLine[i-1] + fibonacciLine[i-2];
    }

    return fibonacciLine[number]

};

// Do not edit below this line
module.exports = fibonacci;
