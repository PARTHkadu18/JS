/* Object assign mdn */
const tinderUser={}

tinderUser.id="123abc"
tinderUser.email="xyz@gmail.com"
// console.log(tinderUser);

const RegularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"parth",
            lastname:"kadu"
        }
    }
}
// console.log(RegularUser.fullname.userfullname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

//** Objects inside objects
// const obj3={obj1,obj2}

const obj3=Object.assign(obj1,obj2) //** obj3 = obj1  */

// Deep cloning
const obj4=Object.assign({},obj1,obj2) //** obj3 != obj1 obj3 != obj2  */
// console.log(obj3);
 
const obj5={...obj1, ...obj2}
// console.log(obj5);

const user=[
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    }
]

user[0].id

// console.log(Object.keys(tinderUser)); // ** return array of keys
// console.log(Object.values(tinderUser)); // ** return array of values
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty('id1'));

const course = {
    coursenmae: "js in hindi",
    price: "999",
    courseInstructor: "Parth"
}

const {courseInstructor:instructor}=course
// console.log(courseInstructor);
console.log(instructor);
