
function randomColor(){
    let color="#"
    const index="0123456789ABCDEF"

    for(let i=0; i<6; i++){
        color+=index[Math.floor(Math.random()*16)];
    }
    return color;
}

const start=document.querySelector("#start");
const stop=document.querySelector("#stop");
const reset=document.querySelector("#reset");

let intervalId
function startChangingColor(){

  const changeColor = function(){
    document.body.style.backgroundColor=randomColor();
  }
  if(!intervalId){
    intervalId=setInterval(changeColor,1000);
  }

  
}

function stopChangingColor(){
  clearInterval(intervalId);
  intervalId=null //code efficient
}

start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor);
reset.addEventListener('click',function(){
  stopChangingColor();
  document.body.style.backgroundColor='#212121'
});
