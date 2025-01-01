const clock=document.querySelector('#date')

setInterval(function(){
    let date =new Date();
    clock.innerHTML=date.toLocaleTimeString();
},10)