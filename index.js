// problem 1
// MindGame

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


// problem 2
// No. Of Elemnts inside a string is whether even or odd

function evenOdd(userString){

    // this function will take a string as an input and if the number of elements inside the string is even it will return even or the element inside the string is odd it will show odd as the finalOutput.

     if(typeof userString !== "string"){
         return 'Please enter a string' ;
     }

    let length = userString.length;
    if(length % 2 == 0)
    {
        return 'even';
    }
    else{
        return 'odd';
    }
}

// problem 3
// checking the difference of a number with 7

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

// problem 4
// total number of negetive numbers inside an array

function findingBadData(userArray){

    // this function will return the total number of negetive numbers inside an array. If there is no negetive numbers it will return 0.

    let count = 0;
    
    for(let i = 0; i < userArray.length; i++ ){
        let element = userArray[i];

        if(element < 0){
           count ++;  
        }
    }
    return count;
}

// problem 5
// finding the number of gems converted into diamond and how many will we get.

function gemsToDiamond(friend1Gem, friend2Gem, friend3Gem){

    // this function will take three parameters as input that indicates the number of jems of different friends and multiply them with their individual powers of their gems. it will show the total gem power of all friend if the sum of gem powers are not more than 2000. Else it will show the gain that is 2000 less than the total gem power. 

     if(typeof friend1Gem !== 'number' || typeof friend2Gem !== 'number' || typeof friend3Gem !== 'number'){
         return 'Please enter numbers in those parameters.'
     }
    
    let friend1Capability = friend1Gem * 21;
    let friend2Capability = friend2Gem * 32;
    let friend3Capability = friend3Gem * 43;
    let totalCapability = friend1Capability + friend2Capability + friend3Capability;

    if(totalCapability > 1000*2){
        let ourGain = totalCapability - 2000;
        return ourGain;
    }
    else{
        return totalCapability;
    }
}