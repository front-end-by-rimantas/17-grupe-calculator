class Car {
    constructor(name, age) {
        this.name = name;
        this.year = age;
        this.engineStatus = false;
    }

    engineOn() {
        if (this.engineStatus) {
            return console.log(`Car ${this.name} engine is already on.`);
        }
        this.engineStatus = true;
        console.log(`Car ${this.name} engine is on.`);
    }

    engineOff() {
        this.engineStatus = false;
        console.log(`Car [name] engine is off.`);
    }
}

export default Car;