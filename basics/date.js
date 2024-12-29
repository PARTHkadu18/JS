let d=new Date(2023,10000,23,18,55,56)
let a=d.toLocaleString()
// console.log(a)

let d1=new Date("2-29-2016")
// console.log(d1.toLocaleString());

// Indian date format and Indian time format
let d2=new Date()
let b=d2.toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})
console.log(b)

let d3=new Date()
let c=d3.toLocaleString("en-IN",{
    timeZone:"Asia/Kolkata", 
    weekday:"long",
    day:"2-digit"})
console.log(c)