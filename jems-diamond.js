// problem 5

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
        return ourGain
    }
    else{
        return totalCapability;
    }
}

let weRecieved = gemsToDiamond(20, 200, 50)
console.log(weRecieved);