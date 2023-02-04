function isBestFriend(friend1, friend2){
    if(friend1.name === friend2.friend && friend2.name === friend1.friend){
        return true;
    } else{
        return false;
    }
}

const friend1 = {
    name: 'emon',
    friend: 'halim'
}
const friend2 = {
    name: 'halim',
    friend: 'imon'
}

console.log(isBestFriend(friend1, friend2))