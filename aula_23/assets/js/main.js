const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]


const innerHTML = function () {

    const container = document.querySelector(".container")
    const div = document.createElement('div');

    container.appendChild(div);

    for (let index = 0; index < elementos.length; index++) {
        let { tag, texto } = elementos[index];
        let createTag = document.createElement(tag);
        createTag.innerText = texto;
        div.appendChild(createTag)
    }

}

innerHTML();
