const nome = 'Luiz'

function falaNome() {
    return nome
}

console.log(falaNome())


function usaFalaNome() {
    const nome = 'otávio'
    falaNome();
}

console.log(usaFalaNome())