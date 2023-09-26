
// A function that creates an array, first all filled with true values
// then search for the numbers that are muliple of the number where your are and chage it to false and the return that array
const sieveOfErastothenes = (limit) => {
    const output = new Array(limit + 1).fill(true);
    output[0] = false;
    output[1] = false;
    for(let i = 2; i <= limit; i++){
      if(output[i] === true){
        for(let j = i * 2; j <= limit; j = j + i){
            output[j] = false;
        }
      }      
    }

    return output;

};


// A function that given an array of booleans return an array of the indices of the true booleans
const returnPrimeNumbers = (array) => {
    const resultArray = [];
    array.forEach((value, index) => {
        if(value === true) {
            resultArray.push(index);
        }
    })
    return resultArray;
}

const test = sieveOfErastothenes(100);
const primeNumbers = returnPrimeNumbers(test)


console.log(test);
console.log(primeNumbers);