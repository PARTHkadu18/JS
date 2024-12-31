function say(){
    console.log("parth");
}

function say1(user){
    return `${user} just logged in`
}

// console.log(say1()); //** undefined logged in

function say2(user="Ram"){
    return `${user} just logged in`
}

// console.log(say2("Parth"));
// console.log(say2());

function print(val1, ...num){
    return num
}
// console.log(print(100,200,300,400));

const user={
    username: "parth",
    price: 199
}


function handObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
    
}
handObj(user)

