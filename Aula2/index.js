"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
// Aula 5: Desestruturação
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
        f: 5,
    },
};
var a = obj.a, b = obj.b, c = __rest(obj, ["a", "b"]);
console.log(a, b, c);
var f = obj.e.f;
console.log(f);
var nameBuilder = function (pNome) {
    var oNomes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        oNomes[_i - 1] = arguments[_i];
    }
    return pNome + " " + oNomes.join(" ");
};
var resposta4 = nameBuilder("Bill", "Fred", "James", "Sam");
console.log(resposta4);
var resposta5 = nameBuilder("Luan", resposta4);
console.log(resposta5);
