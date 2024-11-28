const ask = require('readline-sync')

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

//1. Leia o código abaixo

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


    //a) O que vai ser impresso no console?
//10  50
    //b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//não apareceria nada




//2. Leia o código abaixo

let textoDoUsuario = ask.question("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

    //a. Explique o que essa função faz e qual é sua utilidade
//ela verifica se existe alguma palavra expecífica na frase, nesse caso, "cenoura"
    //b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
        //i.   `Eu gosto de cenoura` true
        //ii.  `CENOURA é bom pra vista` true
        //iii. `Cenouras crescem na terra` true






/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████

 ██████  ██████  ██████  ██  ██████   ██████
██      ██    ██ ██   ██ ██ ██       ██    ██
██      ██    ██ ██   ██ ██ ██   ███ ██    ██
██      ██    ██ ██   ██ ██ ██    ██ ██    ██
 ██████  ██████  ██████  ██  ██████   ██████

█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/


/*
1. Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
​
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
*/

function informacoesSobreMim() {
    console.log("Eu sou Gabriel, tenho 15 anos, moro em São Leopoldo e sou estudante.")
}

informacoesSobreMim()

/*
b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/

function informacoesPessoa() {
    const nome = prompt("Digite seu nome:")
    const idade = prompt("Digite sua idade:")
    const cidade = prompt("Digite sua cidade:")
    const profissao = prompt("Digite sua profissão:")
    
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}
const mensagem = informacoesPessoa()
console.log(mensagem)



/*
2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
*/

function soma(a, b) {
    return a + b
}

const resultadoSoma = soma(10, 5)
console.log(`Soma: ${resultadoSoma}`)

/*
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
*/

function maiorOuIgual(a, b) {
    return a >= b
}


/*
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.
*/

function ehPar(numero) {
    return numero % 2 === 0
}

/*
    d) Faça uma função que recebe uma mensagem string como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/

function mensagemInfo(mensagem) {
    console.log(`Tamanho: ${mensagem.length}, Em maiúsculas: ${mensagem.toUpperCase()}`)
}

/*
3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
*/
function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    return a / b
}

const num1 = Number(prompt("Insira o primeiro número: "))
const num2 = Number(prompt("Insira o segundo número: "))

console.log(`Soma: ${soma(num1, num2)}`)
console.log(`Diferença: ${subtracao(num1, num2)}`)
console.log(`Multiplicação: ${multiplicacao(num1, num2)}`)
console.log(`Divisão: ${divisao(num1, num2)}`)
