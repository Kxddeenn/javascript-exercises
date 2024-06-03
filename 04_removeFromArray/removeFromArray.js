const removeFromArray = function(array, ...takeaway) {

   let newArray = [];
   
    array.forEach((item) => {

        if (!takeaway.includes(item)){
            newArray.push(item);
        }

    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
