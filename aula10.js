/*let num=89;

let res=num%2

if(res==0){
    console.log("par");

}else{
    console.log("impar");
}

O operador ternário (? :) é uma forma simplificada de escrever uma estrutura condicional if...else em JavaScript. Ele é chamado de ternário porque envolve três partes:

condição ? expressão_se_verdadeiro : expressão_se_falso;

0=false
1=true
num%2=0


let num=10;
res=(num%2 ? "par":"impar");
console.log(res); // vai dar impar pois o num%2 resto é 0 então da false, para que a operação  dê certo precisamos negar

*/
let num=19;
res=(!(num%2) ? "par":"impar");
console.log(res);
