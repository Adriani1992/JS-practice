const getOutTown = function(name){
    console.log(`${name} hurry!!! get out the town!!`)
};

getOutTown('Jenny');

class Girl{
    constructor(name, age,title){
        this.name=name;
        this.age=age;
        this.title;

    }
}

class Boy{
    constructor(name, age,title){
        this.name=name;
        this.age=age;
        this.title;

    }
}

const NewGirl = new Girl('Jenny', 15, 'Princess');

console.log(NewGirl)

const NewBoy = new Boy('Leo', 15, 'Princess');

console.log(NewBoy)



//normal output
//npx babel script.js --out-file script-compiled.js



//every time that you change it
//npx babel src/index.js --watch --out-file dist/assets/bundle.js