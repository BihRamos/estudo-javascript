/* O switch é uma estrutura de controle que permite testar múltiplas condições de forma mais limpa e organizada do que com múltiplos if-else.
switch:Verifica um valor contra múltiplos casos
case:Define os valores a serem testados
break:Encerra o switch após um case ser encontrado
default:Executa quando nenhum case é verdadeiro
*/
 
let colocacao=5;

switch(colocacao){
    
    case 1:
        console.log("Primeiro Lugar")
        break
    case 2:
        console.log("Segundo Lugar")
        break
    case 3:
        console.log("Terceiro Lugar")
        break

    case 4: case 5: case 6:
        console.log("Premio de participaçao")
        break

    default:
        console.log("Não subiu ao podio") 
         break
}