function fun(usernmae, score){
    this.username=usernmae;
    this.score=score
}

fun.prototype.inc=function(){
    this.score+=2;
}

fun.prototype.display=function(){
    console.log(`Username is ${this.username} and score is ${this.score}`);
    
}

const fun1=new fun("Parth",10);
fun1.inc();
fun1.display();