/*Os operadores relacionais (ou comparação) são usados para comparar dois valores e retornam true ou false, dependendo da condição. Eles são essenciais para tomadas de decisão.
Operador
>	Maior que	
<	Menor que	
>=	Maior ou igual	
<=	Menor ou igual	
==	Igual (com conversão, operação de comparação )
===	Estritamente igual (sem conversão)	
!=	Diferente (com conversão)	
!==	Estritamente diferente (sem conversão)
*/

let num1=10;
let num2=5;
let num3=10;

console.log(num1 > num2); //comparação (resultado=true//
console.log(num1 < num2); //comparação (resultado=false//
console.log(num1 >= num3); //comparação (resultado=true//
console.log(num1 == num3); //comparação (resultado=true//
console.log(!(num1 == num3)); //inversão (!negação)-(resultado=false//
console.log(num1 != num3); //diferente (resultado=false/
console.log(!(num1 != num3)); //diferente (resultado=true//
console.log(num1 !== num3); // estritamente diferente (resultado = false) <-- Para verificar tipo e valor
console.log(!(num1 != num3)); // diferente (resultado = true)
