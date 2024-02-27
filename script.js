/*Olá! Sou Gabriel Victor e essas são as linhas de código Javascript do site Fotos de Animais.
São códigos bem simples como pode ver. No site, os dados enseridos NÃO SÃO enviados a um 
banco de dados, pelo contrário, são simples mente esquecidos. Objetivo do site é alertar
as pessoas sobre os golpes presentes na internet com uma certa ironia.
Enjoy :) */

let enviar = document.getElementById('enviar')
enviar.addEventListener('click', send)

let nome = document.getElementById('nome')

let email = document.getElementById('email')

let emailsenha = document.getElementById('emailsenha')

let cartaonum = document.getElementById('cartaonum')

let cartaosen = document.getElementById('cartaosen')

let cel = document.getElementById('cel')

let data = document.getElementById('data')

let cpfrg = document.getElementById('cpfrg')

function send(){
    if(nome.value == 0 || email.value == 0 || emailsenha.value == 0 || cartaonum.value == 0 || 
        cartaosen.value == 0 || cel.value == 0 || data.value == 0 || cpfrg.value == 0){
        window.alert('ERRO. Faltam dados!')
    } else {
        window.alert('Tudo certo! Vamos te enviar fotos de animais no seu email!')
    }
}