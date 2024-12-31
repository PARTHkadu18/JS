// Falsy values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

//Truthy values
// "0", 'false', " ", manymore......

val1= 5 ?? 10 
console.log(val1);
val1= null ?? 10 
console.log(val1);
val1= undefined ?? null
console.log(val1);
val1= null ?? undefined
console.log(val1);
