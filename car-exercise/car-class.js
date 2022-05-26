//Part 1:

//create a class for a vehicle with make, model, and year
//needs a method called honk and returns string: 'Beep.'
//needs a method called toString that returns a string of the make,model and year

class Vehicle {
    constructor(mk, md, yr) {
        this.make = mk;
        this.model = md;
        this.year = yr;
    }
    honk() {
        return 'Beep'
    }
    toString() {
        const { make, model, year } = this;
        return `This vehicle is a ${make} ${model} from ${year}`;
    }
}

let myVehicle = new Vehicle('Ford', 'Mustang', 2015);

//Part 2:

//car class inherted from vehicle, add number of wheels property = 4
class Car extends Vehicle {
    constructor(mk, md, yr) {
        super(mk, md, yr);
        this.numWheels = 4
    }
}

let myCar = new Car('Ford', 'Mustang', 2015);

//Part 3:

//motorcycle class inherted from vehicle, add number of wheels property = 2
//and add revEngine method
class Motorcycle extends Vehicle {
    constructor(mk, md, yr) {
        super(mk, md, yr);
        this.numWheels = 2
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

const myMotorcycle = new Motorcycle('Yamaha', 'FZ-07', 2015);

//Part 4

//create Garage class
//property called vehicles which stores array of vehicles
//property called capacity which shows max vehicles that can fit in garage
//new garages will always start empty, just needs capacity
//garage also needs add method, which adds vehicles to the array, however, if you try to
//-add something that isn't a vehicle, garge needs to say "Only vehicles are allowed in here!"
//--furthermore, if garage is at capacity, must say "Sorry, we're full"

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    addVehicle(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!';
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "New vehicle added to your garage!"
    }
}

const myGarage = new Garage(2);