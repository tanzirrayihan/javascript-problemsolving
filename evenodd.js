// problem 2

function evenOdd(userString){

    // this function will take a string as an input and if the elements inside the string is even it will gove even or the element inside the string is odd it will show odd as the finalOutput.

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
let outcome = evenOdd('Batch7');
console.log(outcome);