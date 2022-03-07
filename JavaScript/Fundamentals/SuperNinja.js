class Ninja{
    constructor(name, health=100){
        this.name = name
        this.health = health
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("Hello, my name is " + this.name)
    }

    showStats(){
        console.log("Name: " + this.name)
        console.log("Strength: " + this.strength)
        console.log("Speed: " + this.speed)
        console.log("Health: " + this.health)
    }

    drinkSake(){
        this.health += 10;
    }
}


class Sensei extends Ninja{
    constructor(name){
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("If one does not swim in the toilet, one should not pee in the pool");
    }

    showStats(){
        super.showStats();
        console.log("Wisdom: " + this.wisdom);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();