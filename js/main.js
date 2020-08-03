"use strict";
// TODO: turinio generavimas
// TODO: susijusio mygtuko paspaudimo atvaizdavimas ekrane

// import Car from './Car.js';

// const saab = new Car('Saab 90', 2000);
// const volvo = new Car('Volvo XC90', 2005);
// const audi = new Car('Audi 100', 1980);
// const tesla = new Car('Tesla X', 2010);

import Calculator from './Calculator.js';

const calcParams = {
    selector: '#calc',
    color: 'black',
    fontSize: 14,
    borderRadius: 0
}
const calc = new Calculator(calcParams);

calc.render();