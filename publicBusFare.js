function publicBusFare(people){
    const busCapacity = 50;
    const microCapacity = 11;
    const busFare = 250;
    
    let remainingAfterBus = people % busCapacity;
    
    if(remainingAfterBus > microCapacity){
       let remainingAfterMicro = remainingAfterBus % microCapacity;
       return remainingAfterMicro * busFare;
    } else{
        let busPublicFare = remainingAfterBus * busFare;
        return busPublicFare;
    }

}

console.log(publicBusFare(50));
console.log(publicBusFare(55));
console.log(publicBusFare(75));
console.log(publicBusFare(112));
console.log(publicBusFare(235));
console.log(publicBusFare(365));
