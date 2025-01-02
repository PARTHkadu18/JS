const promiseFour = new Promise(function(reslove,reject){

    const error=false;
    if(!error){
        reslove({username:"Parth", password:"Kadu"})
    }
    else{
        reject(`Error has occured`)
    }
}) 

promiseFour.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
  console.log(error);
  
})
.finally(function(){
  console.log("Kuch na kuch to hua hai");
  
})

// --------- Second Method -------------

const promiseFive = new Promise(function(reslove,reject){

setTimeout(function(){
  const error=false;
if(!error){
    reslove({username:"JavaScript", password:"JS"})
}
else{
    reject(`Error has occured`)
}
},1000);
})  

async function ConsumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
ConsumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
      
//     } catch (error) {
//         console.log("E: ",error);
      
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})