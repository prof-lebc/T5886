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

let x = 10
let y = 10

console.log(y)

y = 5
console.log(x, y)



//2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)



//3. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let m = "10"
let n = Number(m)
let o = n.toString()

console.log(typeof m, typeof n, typeof o)



//4. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let d = "Hello"
let e = d
d = "World"

console.log(d, e)



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
1. construa um programa, seguindo os seguintes passos:
    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Crie novas linhas de código atribuindo valores a estas variáveis já criadas. Utilize os deus dados próprios.
         
    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    
    g) Para finalizar, imprima na tela uma mensagem se apresentando com o seu nome e a sua idade.
*/
