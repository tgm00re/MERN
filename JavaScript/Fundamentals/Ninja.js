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

const ninja1 = new Ninja("Hyabusa")
ninja1.sayName();
ninja1.showStats();