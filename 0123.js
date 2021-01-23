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

class bestFriend extends Friend{
    constructor(name, age, yr, nickname){
        super(name, age, yr)
        this.nickname =nickname;
    }
    deleteFriend(name){
        const friendList = list.filter((p)=>{
            return p.name !== name.name
        })
    }
}

const old = new bestFriend('Efy', 31, 5, 'effy')

console.log(old)

//make the obj without using class

function tomodachi(name, age){
    this.name = name;
    this.age = age;
}

const Sakura = new tomodachi('sakura', 13);



tomodachi.prototype.collectCard = function(){
    console.log(`${this.name} named the card as Sakura card!`)
}

Sakura.collectCard()
console.log(Sakura)

function newClassMate(name, age, comefrom){
    tomodachi.call(this, name, age);
    this.comefrom = comefrom;
}




newClassMate.prototype = Object.create(tomodachi.prototype)
//https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/create

const Akiho = new newClassMate('Akiho', 13, 'UK');

