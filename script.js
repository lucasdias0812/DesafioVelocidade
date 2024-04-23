var resultado = document.getElementById('resultado');


function calcular(){
    var numVelo = parseInt(document.getElementById('numVelo').value);
    
    if (numVelo >= 61){
        var multa = numVelo-60
        var soma = 100*multa
        resultado.innerText = `Você pagará 100 reais por km ultrapassado, totalizando R$${soma}`
    } 
    else {
        resultado.innerText = `Parabéns, você está andando na linha!`
    }
}

