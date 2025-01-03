class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        return `${this._password}Parth`;
    }

    set password(value){
        this._password=value;
    }
}

const obj=new User("abc@gmail.com", "123")
console.log(obj.password);
