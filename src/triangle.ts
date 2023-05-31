export class Triangle {
    baseInput :  any;
    heightInput: any;
    areaInput: any;
    calcButton: any;
    constructor() {
        this.documentBind();
        this.handleEvents();
    }
    documentBind() {
        this.baseInput = document.querySelector('#base') as HTMLInputElement;
        this.heightInput = document.querySelector('#height') as HTMLInputElement;
        this.areaInput = document.querySelector('#area') as HTMLInputElement;
        this.calcButton = document.querySelector('#calcButton') as HTMLInputElement;
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
    calcArea(base: number, height: number): number {
        return base * height / 2;
    }
    clearInputs() {
        this.baseInput.value = '';
        this.heightInput.value = '';
    }
}
