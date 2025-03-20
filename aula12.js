 /*O operador spread (...) é usado para espalhar elementos de um array, objeto ou string em outro lugar. Ele é muito útil para copiar, combinar e manipular dados de forma mais fácil e legível.

O operador spread pode ser usado em:
Arrays → Copiar, concatenar, adicionar elementos.
Objetos → Copiar ou mesclar objetos.
Funções → Passar argumentos como lista.

let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1] //copiando um array para dentro do outro

console.log("n1:"+n1)
console.log("n2:"+n2)
console.log("n3:"+n3)


let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1,...n2] //concatenação de arrays

console.log("n1:"+n1)
console.log("n2:"+n2)
console.log("n3:"+n3)

const jogador1={nome:"Bih",energia:100,vidas:3,magia:150}
const jogador2={nome:"Mih",energia:100,vidas:5,velocidade:80}
const jogador3={...jogador1,...jogador2}//junção

console.log(jogador3)//imprimi a concatenação dos objetos{ nome: 'Mih', energia: 100, vidas: 5, magia: 150, velocidade: 80 }

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4,3,6]

console.log(soma(...valores))*/

const objs1=document.getElementsByTagName("div")//retorna uma coleção de elementos html
const objs2=[...document.getElementsByTagName("div")]

console.log(objs1)
console.log(objs2)
