function innerHtml() {
    const div = document.querySelector(".container")

    const date = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    };
    const finalDate = date.toLocaleString("pt-BR", options);

    return div.innerHTML = `<h1>${finalDate}</h1>`
}

innerHtml();


