const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const resetar = document.querySelector('.resetar')

let pause = false;
let segundos = 0;
let interval;

function hour(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function setTime() {
    if (!pause) {
        let timer = hour(segundos);
        relogio.innerText = timer;
        segundos++
    }
}

iniciar.addEventListener('click', function (event) {
    pause = false
    relogio.style.color = "#000000"
    interval = setInterval(setTime, 1000);
})

pausar.addEventListener('click', function (event) {
    pause = true;
    relogio.style.color = "#ff0000"
    clearInterval(interval)
})

resetar.addEventListener('click', function (event) {
    clearInterval(interval)
    pause = false;
    segundos = 0;
    setTime()
    relogio.style.color = "#000000"
})


