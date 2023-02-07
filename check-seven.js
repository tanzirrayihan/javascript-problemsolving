// problem 3

function isLGSeven(givenNumber){

    // this function will take a number as an input and if the difference between the input number and 7 is less than 7, it will show the difference. Otherwise it will show the double of the first input number as the finalOutput.

     if(typeof givenNumber !== 'number'){
         return 'Please enter a number' ;
     }

    let number1 = givenNumber - 7;
    if(number1 < 7){
        return number1;
    }
    else{
        let newNumber = givenNumber * 2;
        return newNumber;
    }
}
let output =  isLGSeven(20)
console.log(output);