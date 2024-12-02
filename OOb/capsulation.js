class Printer{
    constructor(brand,color){
        this.#setupPrinter(brand,color);
    }
    #setupPrinter(brand,color){
        this.brand=brand;
        this.color=color;
    }

}
const print = new Printer("HP",["red","green","blue"]);
console.log(print.brand , print.color )
