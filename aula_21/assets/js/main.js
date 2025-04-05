function meuExcopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    function recebeEventoForm(evento){
        evento.preventDefault();
        const peso = form.querySelector(".peso")
        const altura = form.querySelector(".altura")
        const imc = (peso.value)/(altura.value)**2
        

        if(Number.isNaN(parseFloat(imc))) {
            resultado.innerHTML = `<p style="background-color: red"> Valor de altura invalido </p>`
        } else if (imc < 18.5) {
            resultado.innerHTML = `<p style="background-color: green"> Seu IMC é ${ imc.toFixed(2) } (Abaixo do peso)</p>`
        }else if (imc < 24.9) {
            resultado.innerHTML = `<p style="background-color: green"> Seu IMC é ${ imc.toFixed(2)} (Peso normal)</p>`
        }else if (imc < 29.9) {
            resultado.innerHTML = `<p style="background-color: green"> Seu IMC é ${ imc.toFixed(2) } (Sobrepeso)</p>`
        }else if (imc < 34.9) {
            resultado.innerHTML = `<p style="background-color: green"> Seu IMC é ${ imc.toFixed(2) } (Obesidade grau 1)</p>`
        }else if (imc < 39.9) {
            resultado.innerHTML = `<p style="background-color: green"> Seu IMC é ${ imc.toFixed(2) } (Obesidade grau 2)</p>`
        }else{
            `<p style="background-color: green> Seu IMC é ${ imc.toFixed(2) } (Obesidade grau 3)</p>`
        }
    }

    form.addEventListener("submit", recebeEventoForm);
}

meuExcopo()
