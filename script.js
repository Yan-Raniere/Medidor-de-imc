function mostrarValor() {
    const altura = (document.getElementById("altura").value)/100;
    const peso = document.getElementById("peso").value;
    imc=(peso/(altura*altura));
    var arredondando = imc.toFixed(1)
    
    if(arredondando >= 16 & arredondando <= 17){
        alert(`O seu imc vale ${arredondando} e você está muito abaixo do peso, oque pode causar queda de cabelo, infertilidade, ausência menstrual!`)
    }
    if(arredondando >= 17 & arredondando <= 18.4){
        alert(`O seu imc vale ${arredondando} e você abaixo do peso, oque pode causar fadiga, stress, ansiedade!`)
    }
    if(arredondando >= 18.5 & arredondando <= 29.9){
        alert(`O seu imc vale ${arredondando} e você está com peso normal, tendo portanto, menor risco de doenças cardíacas e vasculares!`)
    }
    if(arredondando >= 30 & arredondando <= 34.9){
        alert(`O seu imc vale ${arredondando} e você está com obesidade Grau I, oque pode causar diabetes, angina, infarto, aterosclerose!`)
    }
    if(arredondando >= 35 & arredondando <= 40){
        alert(`O seu imc vale ${arredondando} e você está com obesidade Grau II, oque pode causar apneia do sono, falta de ar!`)
    }
    if(arredondando >40){
        alert(`O seu imc vale ${arredondando} e você está com obesidade Grau III	, oque pode causar refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC!`)
    }
   
}

document.getElementById("send").onclick = function(send_form) {
    mostrarValor();
    send_form.preventDefault();
}