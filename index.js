//----------------------------------------------------


// 2 - Número Positivo, Negativo ou Zero:
// Solicite um número ao usuário e exiba se ele é positivo, negativo ou zero.

// let numero = 0

// if (numero == 0) {
//     console.log(`${numero}, é zero`);
// } else if (numero > 0) {
//     console.log(`${numero}, é positivo`);
// } else {
//     console.log(`${numero}, é negativo`);

// }

//------------------------------------

// 3 - Maior entre Dois Números:
// Peça dois números e mostre qual é o maior.Se forem iguais, exiba "Os números são iguais".

// let numero1 = 20
// let numero2 = 20

// if (numero1 > numero2) {
//     console.log(`Caso 1: ${numero1} é maior que ${numero2}.`);
// } else if (numero1 == numero2) {
//     console.log("Os números são iguais");

// } else {
//     console.log(`Caso 2: ${numero2} é maior que ${numero1}.`);

// }


//-------------------------------------------

// 4 - Par ou Ímpar:
// Peça um número e informe se ele é par ou ímpar.

// let numero = 5

// if((numero % 2) == 0){
//     console.log(`${numero} é par`);
// }else{
//     console.log(`${numero} é ímpar`);

// }


//----------------------------------------------


// 5 - Cálculo de Média:
// Receba três notas de um aluno, calcule a média e exiba "Aprovado" se for 7 ou mais, "Recuperação" se for entre 5 e 6.9, e "Reprovado" se for abaixo de 5.

// let nota1 = 4.9
// let nota2 = 4.9
// let nota3 = 4.9
// let situacao = ""

// let media = ((nota1 + nota2 + nota3) / 3).toFixed(1)

// if(media >= 7){
//     situacao = "Aprovado"
// }else if(media >= 5){
//     situacao = "Recuperação"
// }else{
//     situacao = "Reprovado"
// }

// console.log(`${situacao}, média: ${media}`);


//-----------------------------------------

// 6 - Desconto em Compra:
// Se o valor da compra for maior que R$100, aplique um desconto de 10% e exiba o novo valor.

// let valor = 250;

// if (valor > 100) {
//     let descontado = valor * 0.9
//     console.log(`Parabéns você recebeu 10% de desconto, valor total: ${descontado}`);

// }else{
//     console.log("Pobre não tem desconto");
    
// }

//---------------------------------------

// 7 - Verificação de Ano Bissexto:
// Peça um ano e verifique se é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).

// let ano = 2024


// if(ano % 4 == 0){
//     console.log("Ano bisexto");
// } else if(ano % 4 == 0 && ano % 100 != 0){
//     console.log("Ano bisexto");
    
// }
// else{
//     console.log("Não é bisexto");
    
// }

//-------------------------------------------------------

// 8 - Acesso a um Sistema:
// Peça um nome de usuário e uma senha. Se forem "admin" e "1234", exiba "Acesso permitido", caso contrário, "Acesso negado".

// let user = "admin";
// let senha = "1234";

// if(user == "admin" && senha == "1234"){
//     console.log("Acesso permitido");
// } else{
//     console.log("Acesso negado");
    
// }

//----------------------------------------------------
// 9 - Frete Grátis:
// Se o valor da compra for maior ou igual a R$200, ofereça frete grátis, caso contrário, cobre R$20.

// let compra = 199.99

// if(compra >= 200){
//     console.log("Parabéns, você ganhou frete grátis!");
// }else{
//     console.log("O frete vai estar custando $20.00");
    
// }

//------------------------------------------------------

// 10 - Número dentro de um Intervalo:
// Solicite um número e exiba "Está no intervalo" se ele estiver entre 10 e 50, caso contrário, exiba "Fora do intervalo".

// let numero = 9
// if(numero >= 10 && numero <= 50){
//     console.log(`O número ${numero} está dentro do intervalo`);
// }else{
//     console.log(`O número ${numero} está fora do intervalo`);
    
// }