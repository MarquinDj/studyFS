
const paragrafos = document.querySelector('.paragrafos')

const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgorudColorBody = estilosBody.backgroundColor;

console.log(backgorudColorBody)

for (const p of ps) {

    p.style.backgroundColor = backgorudColorBody;
    p.style.color = "#fff";
    
}

// const innerHTML = function () {

//     const container = document.querySelector(".container")
//     const div = document.createElement('div');

//     container.appendChild(div);

//     for (let index = 0; index < elementos.length; index++) {
//         let { tag, texto } = elementos[index];
//         let createTag = document.createElement(tag);
//         createTag.innerText = texto;
//         div.appendChild(createTag)
//     }

// }

// innerHTML();
