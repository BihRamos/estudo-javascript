/*O loop for é uma estrutura de repetição que permite executar um bloco de código enquanto a sua condição for verdadeira.

Sintaxe:for (inicialização; condição; controle) {
  // Bloco de código a ser executado em cada iteração
}

inicialização:Inicializa a variável de controle
condição:Define quando o loop deve parar
controle:Define a mudança na variável de controle após cada iteração
break:Encerra o loop prematuramente
continue:Pula a iteração atual e continua o loop


for(let i=0; i<10; i++){
    console.log("Bih Ramos - valor do i:"+i);
}
    */

for(let i=0; i<10; i++){
    if(i%2==0){
        console.log(i + " é Par");
    }else{
        console.log(i + " é ImPar");
    }
}