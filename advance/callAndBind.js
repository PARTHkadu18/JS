
// In JavaScript, a call is a method that belongs to all functions and allows you to call a function with a specific this value and arguments provided one by one. It's part of the Function.prototype and is often used for function borrowing and setting the context.

//https://chatgpt.com/c/6776bf64-89c0-8012-a482-72b0c20c3f70

function setUserName(username){
    this.username=username;
    console.log("223");
    
}

function createUser(username,email,id){

    setUserName(this,username);
    setUserName.call(this,username);
    this.email=email;
    this.id=id;
}

const user=new createUser("Parth", "parth@123.com", "3");
console.log(user);


// ----------BIND----------

const user1={
    fname:"Ram",
    lname:"Shyam",

    fullname: function(){
        return `${this.fname}, ${this.lname}`
    }
}

const user2={
    fname:"Parth",
    lname:"Kadu"
}

// console.log(user1.fullname.bind(user2)());
const val=user1.fullname.bind(user2);
console.log(val());

