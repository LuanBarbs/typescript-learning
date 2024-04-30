"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function eCommerce(cash, product) {
    var value;
    if (product === "Celular")
        value = 1000;
    else if (product === "Tv")
        value = 2000;
    else if (product === "Computador")
        value = 3000;
    else
        return "Produto não existente no estoque!";
    if (cash < value) {
        return "Saldo insuficiente!";
    }
    return "Compra efetuada!";
}
console.log(eCommerce(1000, "Celular"));
console.log(eCommerce(500, "Celular"));
console.log(eCommerce(500, "Mouse"));
