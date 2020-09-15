let entradas = document.querySelectorAll('input');
let btnSomar = document.querySelector('#btnSomar');
let resposta = document.querySelector('.resposta');
let num1 = entradas[0];
let num2 = entradas[1];
function pegarNum1() {
    return num1.value;
}
 function pegarNum2() {
    return num2.value;
}
function verificarEntradasVazias() {
    if(pegarNum1() === '' || pegarNum2() === ''){return true;}
    else{return false;}
}
function somar(){
    if(verificarEntradasVazias()){
        resposta.classList.remove('certa');
        resposta.classList.add('errada');
        resposta.textContent = "Erro: Preencha os dois números!"
    }
    else{
        resposta.classList.remove('errada');
        resposta.classList.add('certa');
        let numero1 = pegarNum1();
        numero1 = parseFloat(numero1);
        let numero2 = pegarNum2();
        numero2 = parseFloat(numero2);
        let soma = numero1 + numero2;
        resposta.textContent = `${numero1} + ${numero2} = ${soma}`;
    }
}
function subtrair(){
    if(verificarEntradasVazias()){
        resposta.classList.remove('certa');
        resposta.classList.add('errada');
        resposta.textContent = "Erro: Preencha os dois números!"
    }
    else{
        resposta.classList.remove('errada');
        resposta.classList.add('certa');
        let numero1 = pegarNum1();
        numero1 = parseFloat(numero1);
        let numero2 = pegarNum2();
        numero2 = parseFloat(numero2);
        let diferenca = numero1 - numero2;
        resposta.textContent = `${numero1} - ${numero2} = ${diferenca}`;
    }
}
function multiplicar(){
    if(verificarEntradasVazias()){
        resposta.classList.remove('certa');
        resposta.classList.add('errada');
        resposta.textContent = "Erro: Preencha os dois números!"
    }
    else{
        resposta.classList.remove('errada');
        resposta.classList.add('certa');
        let numero1 = pegarNum1();
        numero1 = parseFloat(numero1);
        let numero2 = pegarNum2();
        numero2 = parseFloat(numero2);
        let produto = numero1 * numero2;
        resposta.textContent = `${numero1} * ${numero2} = ${produto}`;
    }
}
function dividir(){
    if(verificarEntradasVazias()){
        resposta.classList.remove('certa');
        resposta.classList.add('errada');
        resposta.textContent = "Erro: Preencha os dois números!"
    }
    else{
        resposta.classList.remove('errada');
        resposta.classList.add('certa');
        let numero1 = pegarNum1();
        numero1 = parseFloat(numero1);
        let numero2 = pegarNum2();
        numero2 = parseFloat(numero2);
        let quociente = numero1 / numero2;
        resposta.textContent = `${numero1} / ${numero2} = ${quociente}`;
    }
}
btnSomar.addEventListener('click',somar);
btnSubtrair.addEventListener('click',subtrair);
btnMultiplicar.addEventListener('click',multiplicar);
btnDividir.addEventListener('click',dividir);