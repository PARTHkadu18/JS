function makeFun(){
    const name="Mozila";
    function display(){
        console.log(name);
    }
    return display;
}

const fun=makeFun(); // fun=display();
fun();  