class Keyboard {
    constructor(params) {
        this.parentDOM = params.htmlVieta;
        this.fontSize = params.font;
        this.bgColor = params.background;

        this.render();
    }

    render() {
        this.parentDOM.innerHTML += `<div class="keyboard">
                                        <div class="btn">1</div>
                                        <div class="btn">2</div>
                                        <div class="btn">+</div>
                                        <div class="btn">=</div>
                                    </div>`;
    }
}

export default Keyboard;