class Friend {
    constructor(name, age, yr){
        this.name=name;
        this.age = age;
        this.yr = 0;
    }
   
    makefriend(){
        console.log(`${this.name} is your friend now`)
        console.log(this);
        return this;
    }
    longfrined(){
        this.yr ++
        this.age ++;
        console.log(`Your friend is ${this.age} old, so you two have been friend for ${this.yr} year`)
        return this;
    }
}

const newFriend = new Friend('Leo', 20,0);
console.log(newFriend)

newFriend.makefriend().longfrined().longfrined()
