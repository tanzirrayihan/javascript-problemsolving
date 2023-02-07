// problem 4

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
let ourBadData = findingBadData ([1, -2, -8, -56, -87, 10, 45]);
console.log(ourBadData);