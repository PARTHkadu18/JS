// const chai = function(){
//     console.log(this);
// }

const chai = () =>{
    console.log(this)
}
// chai()

const addTwo = (num1,num2) =>{
    return num1+num2
}

//  OR

const addTwo2 = (num1,num2) => (num1+num2)

// console.log(addTwo2(3,8));

const user ={
    username: "Parth",
    price: 999,

    fun : () => {
        console.log("Hello");
        // console.log(this.username);
        
    }
}
console.log(user.fun());
