// problem 1

function mindGame(number){

    // this function will take an input and multiply that with 3, than add 10, than divide by 2, than substract 5 and show the finalOutput. 

    if(typeof number !== 'number' || number < 0){
        return 'Please enter a number that is positive' ;
    }

    let number1 = number *3;
    let number2 = number1 + 10;
    let number3 = number2 / 2;
    let finalNumber = number3 - 5;
    return finalNumber; 
}

let finalOutput = mindGame(10);
console.log(finalOutput);