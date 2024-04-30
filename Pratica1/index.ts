export{};

// Prática 1
function eCommerce(cash:number, product:string):string {
    let value:number;
    if(product === "Celular") value = 1000;
    else if(product === "Tv") value = 2000;
    else if(product === "Computador") value = 3000;
    else return "Produto não existente no estoque!";

    if(cash < value) {
        return "Saldo insuficiente!";
    }
    return "Compra efetuada!";
}

console.log(eCommerce(1000, "Celular"));
console.log(eCommerce(500, "Celular"));
console.log(eCommerce(500, "Mouse"));

// Prática 2
interface iVehicle {
    serialNumber:number;
    name:string;
    maxQAllowed:number;
};
class Vehicle implements iVehicle {
    serialNumber: number;
    name: string;
    maxQAllowed: number;
    constructor(serialNumber:number, name:string, maxQAllowed:number) {
        this.serialNumber = serialNumber;
        this.name = name;
        this.maxQAllowed = maxQAllowed;
    }
};
class Automobile extends Vehicle {
    constructor(serialNumber:number, name:string, maxQAllowed:number) {
       super(serialNumber, name, maxQAllowed);
    }
    openTrunk():void {
        console.log("Porta Malas Aberto!");
    }
};
class Aircraft extends Vehicle {
    constructor(serialNumber:number, name:string, maxQAllowed:number) {
        super(serialNumber, name, maxQAllowed);
    }
    contactCenter():void {
        console.log("Central na linha!");
    }
}