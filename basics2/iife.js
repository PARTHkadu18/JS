// Without IIFE
var counter = 0; // This can conflict with other counter variables in the global scope

// With IIFE
(function () {
    let counter = 4;
    console.log("Counter inside IIFE:", counter); // Output: Counter inside IIFE: 0
})();

console.log(counter);

// two iife simultaneously -------------------------

(function chai (){
    console.log("Hello");
    
})(); //*********\\

(()=>{
    console.log("Hiiiiiiii");
})()