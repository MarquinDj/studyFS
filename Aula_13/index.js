
const nome = "Marcus Vinicius Ferreira dos Santos"
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nome.indexOf("a")} <br />`;
document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${nome.lastIndexOf("a")}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.substring(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split()} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase}<br />`;
