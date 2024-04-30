"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declaração de variáveis com tipo
var d;
d = "\n    Hello\n    World\n    Multilinhas.";
console.log(d);
// Arrays
var stringArr;
stringArr = ['Curso', 'TypeScript'];
var genericArr;
genericArr = ['Codi', 'Academy'];
console.log(stringArr);
console.log(genericArr);
// Tuplas (listas diferentes tipos de dados)
var myTuple;
myTuple = [3, true, 'text'];
console.log(myTuple);
// Enumeradores (declarar novos tipos de dados)
var Colors;
(function (Colors) {
    Colors["Red"] = "red";
    Colors["Blue"] = "blue";
    Colors["Green"] = "green";
})(Colors || (Colors = {}));
;
var color;
color = Colors.Red;
console.log(color);
// Funções
function multiplica(x, y) {
    return x * (y || 4);
}
// Pode ser da seguinte forma
// function multiplica(x: number, y: number = 4):number {
//     return x*y;
// }
var resposta = multiplica(2, 4);
console.log(resposta);
// Função de seta
var multiplica2 = function (x, y) {
    return x * (y || 4);
};
var resposta2 = multiplica2(2, 4);
console.log(resposta2);
var myFunc = function (_a) {
    var x = _a.x, y = _a.y, z = _a.z;
    return x;
};
var resposta3 = myFunc({ y: 4, z: 3, x: 5 });
console.log(resposta3);
