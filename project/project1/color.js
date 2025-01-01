const body=document.querySelector('body')
const but=document.querySelectorAll('.button')

but.forEach(function(butt){
    butt.addEventListener('click',function(e){
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='dark'){
            body.style.backgroundColor='#212121';
            body.style.color='white'
        }
            
    })
})