 /*O var está em desuso pois causa  problemas relacionados ao escopo e ao hoisting, que podem levar a comportamentos inesperados no código. Hoje em dia, é recomendado usar let e const.
 
 if(true){
    var nome="Gaby"
 }
 console.log(nome)
 */ 
/* 
Agora veja o que acontece com let:
 if(true){
    let nome="Gaby"
 }
 console.log(nome)
 ele dará erro pois o  let respeita o escopo do bloco { }, evitando acessos indesejados.

 -let-
o valor de um let pode ser atualizado depois da sua criação.

-const-
 uma variável que nunca pode ser alterada
*/
/*
"user strict"

function teste(){
    let nome="Gaby"
    if (true){
        console.log("dentro do IF teste"+nome) // correto//
    }
    console.log("dentro do  teste"+nome)//correto/
}

teste()
console.log("fora do teste"+nome) //dá erro pois não encontra a variavel//
*/

"user strict"

let nome="Gaby"
nome="Bih Ramos"
nome=10//converte o tipo automaticamente//

console.log(nome)

const curso="Javascirpt"//correto//

curso="alooo"
console.log(curso)//erro//
