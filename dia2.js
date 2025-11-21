/* . Calculadora de Média e Status (Fácil/Médio)
Problema: Crie uma função que recebe três notas de um aluno (números entre 0 e 100) e retorna o status do aluno, baseado em sua média.

Passos:

Calcule a média aritmética das três notas.

Use a média para classificar o Status do aluno, retornando uma das seguintes strings:

"Aprovado": Se a média for maior ou igual a 70.

"Recuperação": Se a média for maior ou igual a 50 e menor que 70.

"Reprovado": Se a média for menor que 50.

Exemplo: calculaStatus(70, 80, 90) -> Média = 80 -> Retorna "Aprovado".

Objetivo: Praticar o cálculo e o encadeamento de if/else if/else (ou o uso de switch com true para condições mais complexas) e garantir que todas as faixas de valores sejam cobertas corretamente. */

function mediaAluno(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 70) {
        return ("Aprovado!");
    } else if (media >= 50 && media < 70) {
        return ("Recuperação!");
    } else {
        return ("Reprovado!");
    }
}

console.log(`Notas: 80, 80, 80 | Media: ${mediaAluno(80, 80, 80)}`);
