import Screen from './Screen.js';
import Keyboard from './Keyboard.js';

class Calculator {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;
        this.backgroundColor = params.color;
        this.borderRadius = params.borderRadius;
        this.fontSize = params.fontSize;

        console.log(this);
    }

    render() {
        if (this.selector === '') {
            // TODO: kai nenurodytas selectorius, generuojame kaip pirma BODY elementa
        }
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            // TODO: kai nenurodytas selectorius, generuojame kaip pirma BODY elementa
            console.error('Norima vieta nerasta');
        }
        this.DOM = DOM;

        // patikrinti, ar turi reikiama "calc" klase
        if (!DOM.classList.contains('calc')) {
            DOM.classList.add('calc');
        }

        const screenParams = {
            parentDOM: this.DOM,
            background: this.backgroundColor,
            font: this.fontSize
        }
        new Screen(screenParams);

        const keyboardParams = {
            htmlVieta: this.DOM,
            background: this.backgroundColor,
            font: this.fontSize
        }
        new Keyboard(keyboardParams);

        // const screen = new Screen();
        // const keyboard = new Keyboard();
        // const HTML = screen.render() + keyboard.render();

        // DOM.innerHTML = HTML;
    }

    updateFontSize() {
        console.log('Updating font size...');
    }
}

export default Calculator;