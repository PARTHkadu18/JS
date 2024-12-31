// Why var is not used
let c=123
if(true){
    var cd=20
}
// console.log(c);

// -------------------------------------------------------------------------------

console.log(one(2));

function one(num){
    return num+1
}

console.log(two(3));

const two = function(num){
    return num+3
}