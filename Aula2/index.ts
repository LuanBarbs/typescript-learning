export{};

// Declaração de variáveis com tipo

let d:string;
d = `
    Hello
    World
    Multilinhas.`;
console.log(d);

// Arrays

let stringArr: string[];
stringArr = ['Curso', 'TypeScript'];
let genericArr: Array<string>;
genericArr = ['Codi', 'Academy'];
console.log(stringArr);
console.log(genericArr);

// Tuplas (listas diferentes tipos de dados)

let myTuple: [number, boolean, string];
myTuple = [3, true, 'text'];
console.log(myTuple);

// Enumeradores (declarar novos tipos de dados)

enum Colors {Red = 'red', Blue = 'blue', Green = 'green'};
let color: Colors;
color = Colors.Red;
console.log(color);

// Funções

function multiplica(x: number, y?: number):number {
    return x*(y || 4);
}
// Pode ser da seguinte forma
// function multiplica(x: number, y: number = 4):number {
//     return x*y;
// }
const resposta = multiplica(2, 4);
console.log(resposta);

// Função de seta

let multiplica2 = (x: number, y?: number):number => {
    return x*(y || 4);
}
const resposta2 = multiplica2(2, 4);
console.log(resposta2);

let myFunc = ({x,y,z}):number => {
    return x;
}
const resposta3 = myFunc({y:4, z:3, x:5});
console.log(resposta3);