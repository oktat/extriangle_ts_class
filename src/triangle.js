export class Triangle {
    constructor() {
        this.documentBind();
        this.handleEvents();
    }
    documentBind() {
        this.baseInput = document.querySelector('#base');
        this.heightInput = document.querySelector('#height');
        this.areaInput = document.querySelector('#area');
        this.calcButton = document.querySelector('#calcButton');
    }
    handleEvents() {
        this.calcButton.addEventListener('click', () => {
            this.startCalc();
        });
    }
    startCalc() {
        let base = this.baseInput.value;
        let height = this.heightInput.value;
        let area = this.calcArea(base, height);
        this.areaInput.value = area;
        this.clearInputs();
    }
    calcArea(base, height) {
        return base * height / 2;
    }
    clearInputs() {
        this.baseInput.value = '';
        this.heightInput.value = '';
    }
}
