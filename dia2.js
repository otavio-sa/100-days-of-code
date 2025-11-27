function calculaStatusAluno(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    
    if (media >= 70) {
        return "Aprovado"; 
    } else if (media >= 50 && media < 70) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

console.log(`Notas: 50, 19, 2 | Resultado: ${calculaStatusAluno(50, 19, 2)}`);
console.log(`Notas: 80, 80, 80 | Resultado: ${calculaStatusAluno(80, 80, 80)}`);
console.log(`Notas: 50, 60, 60 | Resultado: ${calculaStatusAluno(50, 60, 60)}`); 