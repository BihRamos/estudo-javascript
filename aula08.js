/* Os operadores bitwise trabalham diretamente com os bits dos números,     manipulando-os individualmente. Eles são úteis para otimização de desempenho, manipulação de bits e criptografia.

    let n1=10
    let n2=11

    let res= n1&n2
    console.log(res)

    Número Decimal	Representação Binária
        10	                1010
        11	                1011
        AND (&)	          1010 (10)
    
*/

/*  Número Decimal	Representação Binária
        10	                1010
        11	                1011
       OR (|)	            1011 (11)   
       
 

    let n1=10
    let n2=11

    let res= n1|n2
    console.log(res)


	XOR	"^"	Compara cada bit e retorna 1 se os bits forem diferentes

    Número Decimal	Representação Binária
         10	                1010
         11	                1011
      XOR ()	            0001 (1)   

    let n1=10
    let n2=11

    let res= n1^n2
    console.log(res)

    O operador >> é o shift à direita (ou right shift) em JavaScript. Ele move todos os bits de um número para a direita.resultante é uma divisão por potências de 2.

    O operador << é o shift à esquerda (ou left shift) em JavaScript. Ele move todos os bits de um número para a esquerda.resultante é uma multiplicação por potências de 2.

    

    let n1=25
   
    let res= n1 >> 1
    console.log(res)//12*/

    let n1=25
   
    let res= n1 <<1
    console.log(res)//50