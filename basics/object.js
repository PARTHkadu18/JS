// singleton
// object.create


// object literals

// Using symbol as a key ****
const myKey = Symbol("Hello")

const JsUser = {
    name: "Parth",
    age: 20,
    [myKey]: "Kadu",
    "location a": "Paratwada",
    lastLoginDays: ["Monday", "Saturday"]
}
// Access objects
// console.log(JsUser.age);
// console.log(JsUser["name"]);
// console.log(JsUser[myKey]);

JsUser["age"]=22
// Object.freeze(JsUser)
// JsUser["age"]=20
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello World");
    return
}

// ** We will also get undefined in the output as it is not returning anything
// console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
    return
}
console.log(JsUser.greetingTwo());
