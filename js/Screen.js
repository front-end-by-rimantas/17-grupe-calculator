class Screen {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.backgroundColor = params.background;
        this.fontSize = params.font;

        this.render();
    }

    render() {
        this.parentDOM.innerHTML += `<div class="screen">
                                        <div class="result"></div>
                                        <div class="input"></div>
                                    </div>`;
    }
}

export default Screen;