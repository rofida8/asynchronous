class Vehical{
    constructor(name,maxSpeed){
        this.name=name;
        this.maxSpeed=maxSpeed;
    }

    getMaxSpeed(){
       return this.maxSpeed;
    }
}
class Spaceship extends Vehical{
    constructor(name,maxSpeed,numRocketEngine){
         super(name,maxSpeed);
    this.numRocketEngine=numRocketEngine;  
    }
}
const spaceship =new Spaceship("roror",1000,2);
console.log(spaceship.getMaxSpeed());
console.log(spaceship.numRocketEngine);

