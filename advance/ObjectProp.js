// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

// Math.PI=5;
// console.log(Math.PI);
// Cannnot define property of Math.PI

const user={
    username: "Parth",
    id: 2
}
const prop=Object.getOwnPropertyDescriptor(user,'username')
console.log(prop);

Object.defineProperty(user,'username',{
    writable: false
});

user.username="Kadu"
console.log(user.username);

