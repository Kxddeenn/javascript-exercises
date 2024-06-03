const sumAll = function(numberstart, numberTo) {

    // Declare variables
   let sumEverything = 0;
   let startNum = 0;
   let endNum = 0;

    

   // Negative numbers return ERROR

   if(numberstart < 0 || numberTo < 0){
    return "ERROR";
   }

   if(!Number.isInteger(numberstart) || !Number.isInteger(numberTo)){
    return "ERROR";
   }


   
   // Making sure bigger number always ends the loop
   
   if (numberTo < numberstart){
        endNum = numberstart;
        startNum = numberTo;
    }

    else{
        endNum = numberTo;
        startNum = numberstart;
    }



    // Summing up the numbers

    for(let i = startNum; i <= endNum; i++){

        sumEverything += i;

    } 

    return sumEverything;



};

// Do not edit below this line
module.exports = sumAll;
