//variáveis constantes que pegam o conteudo HTML dos respectivos ids
const nome = document.getElementById('nome-txt')
const altura = document.getElementById('altura-txt')
const peso = document.getElementById('peso-txt')
const resultado = document.getElementById('res')
//função realizada ao clicar no botão
document.getElementById('btn').addEventListener('click', ()=>{
    //variável que calcular o IMC
    let imc = (peso.value)/(altura.value*altura.value);
    let categoria;
    if(imc<18.5) {
        categoria = 'Abaixo do peso'
    } else if(imc >= 18.5 & imc <=24.9) {
        categoria = 'Peso normal'
    } else if(imc >= 25 & imc <=29.9) {
        categoria = 'Sobrepeso'
    } else if(imc >=30&imc<=34.9) {
        categoria = 'obesidade Grau 1'
    } else if(imc >=35&imc<=39.9) {
        categoria = 'obesidade Grau 2'
    } else if(imc >=40) {
        categoria = 'obesidade Grau 3 ou mórbida'
    }
    
    //condicional que verifica se os inputs estão vazios 
    if(nome.value !=='' & peso.value !=='' & altura.value !==''){
        resultado.innerHTML = `${nome.value} seu IMC é de: ${imc.toFixed(2)} <br> Você está ${categoria}`
    } else {
        resultado.innerText = 'Preencha os campos'
    }
})

