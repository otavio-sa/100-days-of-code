/* 
🗓 Tarefa do Dia 1: Condicionais (Lógica Essencial)
Para o Dia 1, o exercício será focado em Lógica Condicional e no uso de operadores.

💡 Exercício Sugerido (Dia 1)
1. Classificador de Números (Fácil)
Problema: Crie uma função que recebe um número inteiro como entrada e retorne uma das três strings:

"Positivo e Par": Se o número for maior que zero e divisível por 2.

"Negativo ou Ímpar": Se o número for menor que zero ou se o número não for divisível por 2 (ímpar).

"Zero": Se o número for exatamente zero.

Objetivo: Praticar o uso de if/else if/else e dos operadores lógicos (&&, ||) e matemáticos (% para módulo/resto da divisão). */

function classificaNumero(numero) {
    if (numero > 0 && numero % 2 === 0) {
        console.log("Este número é positivo e par");
    } else if (numero < 0 || numero % 2 === 1) {
        console.log("Este número é negativo ou ímpar");
    } else if (numero === 0) {
        console.log("Este número é 0");
    } else {
        console.log("Insira um número válido");
    }
}

classificaNumero(2);