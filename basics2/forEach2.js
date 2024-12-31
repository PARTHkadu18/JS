const code=[1,2,3,4,5,6,7,8,9,10]

// const newNums=code.map((nums) => nums+10)
const newNums=code.map((num) => num*10).map((num) => num+1)

// console.log(newNums);

myNums=[1,2,3]
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} & currval: ${currval}`);
    
//     return acc+currval
// },2) 

// const myTotal =  myNums.reduce((acc,curr)=> {
//     return acc+curr
// },2)
// OR

const myTotal=myNums.reduce((acc,currval)=>(acc+currval),0)
console.log(myTotal);

