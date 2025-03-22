/*Use for...in para objetos e for...of para arrays e iteráveis! 
for...in:Objetos e Arrays	Chaves (índices ou propriedades)
for...of:Arrays e Iteráveis	Valores diretamente

O length é muito útil para saber o tamanho de strings e arrays! 
String:Quantidade de caracteres
Array:Quantidade de elementos
Objeto:especial	Quantidade de itens iteráveis
 

let num =[10,20,30,40,50];

for(let i=0;i<num.length;i++){
    console.log(i)//imprimi a posição dos elementos dentro do array//}

 for(n of num){
    console.log(n)
}

for(n in num){
    console.log(n)
    }

    let num =[10,20,30,40,50];

for(let i=0;i<num.length;i++){
    console.log(num[i])}//imprimi os elementos
*/
 
 const objs=document.getElementsByTagName("div")

 let num =[10,20,30,40,50]

 for(o of objs){
    console.log(o.innerHTML="DEV")
}

for(o in objs){
    console.log(objs[o].innerHTML)
    }

