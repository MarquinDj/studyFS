const addTask = document.querySelector('.add')
const task = document.querySelector('.task')
const listTask = document.querySelector('.listTask')
const resetar = document.querySelector('.resetar')


addTask.addEventListener('click', function (event) {
    if (!task.value) return
    taskValue = task.value
    listTask.innerHTML += `<li class= "task-${task.value}"> ${task.value} <button class="button-${task.value}"> Apagar </button> </li>`
    task.value = "";
    addDeleteListener(taskValue)
})

function addDeleteListener(id) {

    const delet = document.querySelector(`.button-${id}`) 

    delet.addEventListener('click', function (event) {
        let list = document.querySelector(`.task-${id}`);
        list.remove()
    })

}

