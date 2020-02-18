

let nomeCandidato = prompt("Qual seu nome?");
let saudacao = ("Olá " + nomeCandidato + "!");
document.write(saudacao);

let inicializacao = prompt("Gostaria de Iniciar o teste?\n1. Sim\n2. Não");

let nome = document.getElementById("respCorretas");
let pergunta1 = prompt("Qual a raiz quadrada de 25?\n1. 5\n2. 15");
let pergunta2 = prompt("Quantos planetas tem no Sistema Solar?\n1. 8\n2. 9");
let pergunta3 = prompt("Qual é a capital dos Estados Unidos?\n1. Washington\n2. New York");

let resposta1;
let resposta2;
let resposta3;


if (inicializacao == 1) {
    if (pergunta1 == 1) {
        resposta1 = "Resposta 1 Correta";
    } else {
        resposta1 = "Resposta 1 Incorreta";
    }
    console.log(resposta1);

    if (pergunta2 == 1) {
        resposta2 = "Resposta 2 Correta";
    } else {
        resposta2 = "Resposta 2 Incorreta";
    }
    console.log(resposta2);

    if (pergunta3 == 1) {
        resposta3 = "Resposta 3 Correta";
    } else {
        resposta3 = "Resposta 3 Incorreta";
    }
    console.log(resposta3);


} else {
    alert("Este teste foi cancelado!");
}

let divCorreta = document.getElementById("respCorretas");
//divCorreta.inner = 
let divErrada = document.getElementById("respErradas");