function meuExcopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector(".nome")
        const sobrenome = form.querySelector(".sobrenome")
        const peso = form.querySelector(".peso")
        const altura = form.querySelector(".altura")

        let pessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value)

        pessoas.push(pessoa)

        resultado.innerHTML += `<p> ${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}  </p>`

        console.log(pessoas)
    }

    form.addEventListener("submit", recebeEventoForm);
}

function criaPessoa (nome, sobrenome, peso, altura){
    return { nome, sobrenome, peso, altura }
}

meuExcopo()
