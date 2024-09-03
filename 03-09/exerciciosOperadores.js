/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/

//1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a1 = 10;
let b1 = 5;
let c1 = a1 + b1;

a1 = a1 * 2;
b1 = b1 - 3;
c1 = c1 / 2;

console.log(a1, b1, c1);


//2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a2 = 7;
let b2 = 3;
let c2 = 10;

let resultado1_2 = (a2 > b2) && (c2 > a2);
let resultado2_2 = (b2 == 3) || (c2 < a2);
let resultado3_2 = !(a2 < c2);

console.log(resultado1_2, resultado2_2, resultado3_2);


//3. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a3 = 12;
let b3 = 8;
let c3 = 5;

let comparacao1_3 = a3 > b3 && b3 > c3;
let comparacao2_3 = a3 == 12 || c3 < 0;
let comparacao3_3 = b3 <= a3 && !(c3 == 5);

console.log(comparacao1_3, comparacao2_3, comparacao3_3);


//4. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a4 = 15;
let b4 = 4;

let resultadoA_4 = (a4 / b4) > 3;
let resultadoB_4 = a4 % b4 == 3;
let resultadoC_4 = (a4 - b4) * 2 == 22;

console.log(resultadoA_4, resultadoB_4, resultadoC_4);


//5. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a5 = 8;
let b5 = 6;
let c5 = 3;

let resultado1_5 = (a5 * b5) > (c5 * 10) || (b5 + c5) < 10;
let resultado2_5 = (a5 / c5) == b5 && (c5 - b5) < 0;
let resultado3_5 = !(a5 % b5 == 0) || c5 == 3;

console.log(resultado1_5, resultado2_5, resultado3_5);


//6. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a6 = "5";
let b6 = 10;
let c6 = a6 + b6;
let d6 = Number(a6) + b6;
let e6 = b6.toString();

console.log(typeof a6, typeof b6, typeof c6, typeof d6, typeof e6);


//7. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a7 = "15";
let b7 = 5;
let c7 = Number(a7) * b7;

let resultado1_7 = (typeof a7 == typeof b7);
let resultado2_7 = (a7 == b7);
let resultado3_7 = (c7 > 50) && (typeof c7 == "number");

console.log(resultado1_7, resultado2_7, resultado3_7);


//8. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a8 = "20";
let b8 = 10;
let c8 = a8 - b8;
let d8 = a8.toString() + b8.toString();

let resultadoA_8 = typeof c8 == "number" && typeof d8 == "string";
let resultadoB_8 = c8 == Number(a8) - b8;
let resultadoC_8 = d8 === a8 + b8.toString();

console.log(resultadoA_8, resultadoB_8, resultadoC_8);


//9. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a9 = "30";
let b9 = 15;
let c9 = a9 / b9;
let d9 = (a9 * 2).toString();

let resultado1_9 = typeof c9 == "number";
let resultado2_9 = typeof d9 == "string";
let resultado3_9 = Number(a9) + b9 == c9 * b9;

console.log(resultado1_9, resultado2_9, resultado3_9);


//10. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a10 = "8";
let b10 = 4;
let c10 = Number(a10) + b10;
let d10 = c10.toString();

let resultado1_10 = typeof a10 == typeof d10;
let resultado2_10 = a10 + b10 == d10;
let resultado3_10 = c10 == Number(d10);

console.log(resultado1_10, resultado2_10, resultado3_10);



//11. Criando Expressões Aritméticas
// Escreva um código que declare três variáveis: a11, b11, e c11. 
// Atribua valores numéricos a elas e, em seguida, crie uma nova variável resultado11 
// que armazene a soma de a11 e b11, multiplicada por c11. 
// Exiba o valor de resultado11 no console.




//12. Comparação de Valores
// Crie duas variáveis, x12 e y12, e atribua a elas valores inteiros diferentes.
// Escreva expressões que comparem se x12 é maior que y12, se y12 é menor ou igual a x12, 
// e se x12 e y12 são iguais. Exiba os resultados dessas comparações no console.




//13. Operadores Lógicos
// Declare três variáveis booleanas: p13, q13, e r13. Atribua a elas valores true ou false.
// Escreva expressões usando operadores lógicos (&&, ||, !) para criar uma nova variável resultado13,
// que será true apenas se p13 for true e q13 ou r13 forem true.
// Exiba o valor de resultado13 no console.




//14. Operações com Strings e Números
// Declare duas variáveis, s14 e t14. Atribua um valor numérico a s14 e uma string numérica a t14.
// Converta t14 para número usando Number() e adicione-a a s14. 
// Exiba o resultado da adição e o tipo da variável resultante no console usando typeof.




//15. Comparando Tipos
// Crie duas variáveis, u15 e v15, uma com um número e a outra com uma string que representa o mesmo número.
// Compare os tipos dessas variáveis usando typeof e exiba o resultado no console. 
// Depois, verifique se as variáveis têm o mesmo valor usando == e ===.




//16. Mistura de Operadores e Tipos
// Declare três variáveis, w16, x16, e y16, com valores numéricos. 
// Use operações aritméticas e comparações para criar uma expressão complexa 
// que utilize parênteses para controlar a precedência das operações. 
// Exiba o resultado no console.




//17. Concatenação e Conversão
// Crie duas variáveis, z17 e a17, uma com uma string e outra com um número. 
// Concatene as duas variáveis e exiba o resultado e o tipo da variável resultante no console.




//18. Operações Aritméticas com Conversão
// Declare três variáveis, b18, c18, e d18, com valores numéricos, 
// sendo que uma delas deve ser uma string numérica. 
// Converta as variáveis para o tipo correto e calcule a média desses valores. 
// Exiba a média no console.




//19. Uso do toString() e Number()
// Declare uma variável com um valor numérico e converta-a para uma string usando toString(). 
// Depois, converta a string de volta para número usando Number() e exiba o tipo da variável em cada etapa no console.




//20. Desafios com Tipos e Operadores
// Declare quatro variáveis com tipos mistos (números e strings). 
// Crie uma expressão que envolva operações aritméticas e lógicas, 
// convertendo tipos quando necessário, e exiba o resultado no console.



