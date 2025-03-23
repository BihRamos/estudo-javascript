/*loop while 
O while(enquanto) é um loop de repetição que executa um bloco de código enquanto a condição for verdadeira. Ele é útil quando não sabemos exatamente quantas vezes o loop deve rodar.

let n=0;

while(n<10){
    console.log(n)
    n++
}

*/

 
//5! = 5*4*3*2*1=120



let n=10;
let fat=1;

while(n>=1){
    fat*=n
    n--
}
console.log(fat);