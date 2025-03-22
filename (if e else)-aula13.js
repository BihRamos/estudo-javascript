/*O if e else são usados para tomar decisões no código, executando diferentes blocos dependendo de uma condição.
    if (condição) {
    // Código executado se a condição for verdadeira
  } else if (outraCondição) {
    // Código executado se a outraCondição for verdadeira
  } else {
    // Código executado se nenhuma condição for verdadeira}
    If aninhado:Um if dentro de outro if
    Problema:Pode deixar o código confuso
    Solução:Usar operadores lógicos (&&)*/

/*let num=10;

if(num>10){//se numero maior que 10

    console.log("Numeral maior que 10");//excetute esse bloco

}else{//se não-caso contrário
    console.log("Numeral menor que 10");// execute esse
}

console.log("Fim do programa");


let num=10;

if(num>10){

    console.log("Numeral maior que 10");

}else if (num>5){
    console.log("Numeral está entre 6 e 10");

}else{
    console.log("Numeral menor ou igual a 5");
}

    console.log("Fim do programa");*/

let energia=100;
let clima="sol";

if(energia>70 && clima == "sol"){

    console.log("Vou a praia");

}else{
    console.log("Vou ao cinema");
}

   
