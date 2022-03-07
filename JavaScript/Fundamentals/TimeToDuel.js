class Card{
    constructor(name, cost){
        this.cost = cost
    }
}


class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power
        } else{
            throw new  Error("Target must be a unit!");
        }
    }
}


class Effect extends Card{
    constructor(name, cost, text,stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    buff(target){
        if(target instanceof Unit){
            if(this.stat = "power"){
                target.power += this.magnitude;
            } else if(this.stat = "resilience"){
                target.resilience += this.magnitude;
            }
        } else{
            throw new  Error("Target must be a unit!");
        }
    }
}


redBeltNinja = Unit("Red Belt Ninja", 3, 3, 4);
blackBeltNinja = Unit("Black Belt Ninja", 4, 5, 4);

hardAlgorithm = Unit("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
unhandledPromiseRejection = Unit("Unhandled Promise Rejection", 1, "Reduce target's resilience by  2", "resilience", -2);
pairProgramming = Unit("Pair Programming", 3, "Increase target's powerby 2", "power", 2);

unhandledPromiseRejection.buff(redBeltNinja);
pairProgramming.buff(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
